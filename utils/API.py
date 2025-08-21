from utils.System import System

class API:
    def __init__(self):
        self.system = System()


    def close_window(self):
        import webview
        webview.active_window().destroy()