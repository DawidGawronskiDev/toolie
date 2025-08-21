from utils.System import System

class API:
    def __init__(self):
        self.system = System()

    def close_window(self):
        import webview
        webview.active_window().destroy()

    def get_device_model(self):
        try:
            device_model = self.system.get_model()
            print(device_model)
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