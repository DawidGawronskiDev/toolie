from utils.Drivers import Drivers
from utils.System import System
from utils.Internet import Internet

class API:
    def __init__(self):
        self.system = System()
        self.internet = Internet()
        self.drivers = Drivers()

    def close_window(self):
        import webview
        webview.active_window().destroy()

    def get_device_model(self):
        return self.system.get_model()
        
    def connect_to_internet(self):
        return self.internet.connect();

    # def install_remote_drivers(self):
    #     try:
    #         self.drivers.install_remote_drivers()
    #         return {
    #             "success": True,
    #             "message": "Successfully installed remote drivers."
    #         }
    #     except Exception as e:
    #         print(f"Error installing remote drivers: {e}")
    #         return {
    #             "success": False,
    #             "error": str(e)
    #         }

    def install_local_drivers(self):
        return self.drivers.install_local_drivers()
        
    def run_windows_update(self):
        try:
            self.system.run_windows_update()
            return {
                "success": True,
                "message": "Successfully initiated Windows Update."
            }
        except Exception as e:
            print(f"Error running Windows Update: {e}")
            return {
                "success": False,
                "error": str(e)
            }
        
    def upgrade_windows_to_pro(self):
        return self.system.upgrade_windows_to_pro()