from utils.API import API
import webview

class Main:
    def __init__(self):
        self.api = API()

    def run(self):
        gui_path = "./gui/dist/index.html"
        webview.create_window('Toolie', gui_path, js_api=self.api, fullscreen=True)
        webview.start(debug=True)


if __name__ == "__main__":
    Main().run()