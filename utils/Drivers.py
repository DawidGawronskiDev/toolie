from utils.Settings import Settings
from utils.System import System
import threading
import queue
import time

class Drivers:
    def __init__(self):
        self.settings = Settings().get_settings()["drivers"]
        self.model = System().get_model()
        self.installation_status = {}
        self.status_queue = queue.Queue()
        self.window = None  # Will be set by API
    
    def set_window(self, window):
        """Set the webview window for sending updates to GUI"""
        self.window = window
    
    def send_update_to_gui(self, update):
        """Send real-time update to GUI"""
        if self.window:
            try:
                # Send update via webview's evaluate_js
                self.window.evaluate_js(f'window.handleDriverUpdate({update})')
            except Exception as e:
                print(f"Failed to send update to GUI: {e}")
        
        # Also add to status queue for polling
        self.status_queue.put(update)
    
    def install_driver_thread(self, driver_path, driver_id):
        """Install a single driver in a separate thread"""
        import subprocess
        import os
        
        driver_name = os.path.basename(driver_path)
        
        try:
            # Send starting status
            self.send_update_to_gui({
                "id": driver_id,
                "name": driver_name,
                "status": "installing",
                "progress": 0
            })
            
            print(f"Installing driver: {driver_path}")
            result = subprocess.run(
                [driver_path, "/SP-", "/SILENT", "/SUPPRESSMSGBOXES"],
                capture_output=True,
                text=True,
                timeout=300  # 5 minute timeout
            )
            
            if result.returncode == 0:
                self.send_update_to_gui({
                    "id": driver_id,
                    "name": driver_name,
                    "status": "success",
                    "progress": 100,
                    "message": "Driver installed successfully"
                })
                self.installation_status[driver_id] = {"status": "success", "name": driver_name}
            else:
                self.send_update_to_gui({
                    "id": driver_id,
                    "name": driver_name,
                    "status": "failed",
                    "progress": 0,
                    "error": f"Installation failed with exit code: {result.returncode}"
                })
                self.installation_status[driver_id] = {"status": "failed", "name": driver_name, "error": f"Exit code: {result.returncode}"}
                
        except subprocess.TimeoutExpired:
            self.send_update_to_gui({
                "id": driver_id,
                "name": driver_name,
                "status": "failed",
                "progress": 0,
                "error": "Installation timeout (5 minutes)"
            })
            self.installation_status[driver_id] = {"status": "failed", "name": driver_name, "error": "Timeout"}
            
        except Exception as e:
            self.send_update_to_gui({
                "id": driver_id,
                "name": driver_name,
                "status": "failed",
                "progress": 0,
                "error": str(e)
            })
            self.installation_status[driver_id] = {"status": "failed", "name": driver_name, "error": str(e)}

    def install_local_drivers(self):
        import os
        import uuid
        
        try:
            drivers_path = os.path.join(os.getcwd(), "drivers", "local", self.model)
            
            if not os.path.isdir(drivers_path):
                return {
                    "success": False,
                    "error": f"Drivers path does not exist: {drivers_path}"
                }
            
            # Get all driver files
            driver_files = []
            for file in os.listdir(drivers_path):
                file_path = os.path.join(drivers_path, file)
                if os.path.isfile(file_path) and file_path.lower().endswith('.exe'):
                    driver_files.append(file_path)
            
            if not driver_files:
                return {
                    "success": False,
                    "error": f"No driver files (.exe) found in: {drivers_path}"
                }
            
            # Clear previous status
            self.installation_status.clear()
            
            # Start installation threads
            threads = []
            driver_ids = []
            
            for driver_path in driver_files:
                driver_id = str(uuid.uuid4())
                driver_ids.append(driver_id)
                
                thread = threading.Thread(
                    target=self.install_driver_thread,
                    args=(driver_path, driver_id),
                    daemon=True
                )
                threads.append(thread)
                thread.start()
            
            return {
                "success": True,
                "message": f"Started installation of {len(driver_files)} drivers",
                "driver_ids": driver_ids,
                "total_drivers": len(driver_files)
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": f"Failed to start driver installation: {str(e)}"
            }
    
    def get_installation_status(self, driver_id=None):
        """Get installation status for specific driver or all drivers"""
        if driver_id:
            return self.installation_status.get(driver_id, {"status": "not_found"})
        return self.installation_status.copy()
    
    def get_status_updates(self):
        """Get all pending status updates from queue"""
        updates = []
        while not self.status_queue.empty():
            try:
                updates.append(self.status_queue.get_nowait())
            except queue.Empty:
                break
        return updates