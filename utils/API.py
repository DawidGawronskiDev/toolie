from utils.System import System
from utils.Internet import Internet

class API:
    def __init__(self):
        self.system = System()
        self.internet = Internet()

    def close_window(self):
        import webview
        webview.active_window().destroy()

    def get_device_model(self):
        try:
            device_model = self.system.get_model()
            return {
                "success": True,
                "data": {
                    "model": device_model
                }
            }
        except Exception as e:
            print(f"Error getting device model: {e}")
            return {
                "success": False,
                "error": str(e)
            }
        
    def connect_to_internet(self):
        try:
            self.internet.connect()
            return {
                "success": True,
                "message": f"Successfully connected to Wi-Fi: {self.internet.settings['ssid']}"
            }
        except Exception as e:
            print(f"Error connecting to internet: {e}")
            return {
                "success": False,
                "error": str(e)
            }