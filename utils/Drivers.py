from utils.Settings import Settings

class Drivers:
    def __init__(self):
        self.settings = Settings().get_settings()["drivers"]

    def install_remote_drivers(self):
        from utils.System import System
        import subprocess
        import os
        model = System().get_model()

        drivers_path = f"{self.settings["remote_drivers_path"]}\\{model}"

        if os.path.isdir(drivers_path):
            for file in os.listdir(drivers_path):
                file_path = os.path.join(drivers_path, file)
                if os.path.isfile(file_path) and file_path.lower().endswith('.exe'):
                    print(f"Running: {file_path} /SP- /SILENT /SUPPRESSMSGBOXES")
                    subprocess.run([file_path, "/SP-", "/SILENT", "/SUPPRESSMSGBOXES"])
        else:
            print(f"Drivers path does not exist: {drivers_path}")

    def install_local_drivers(self):
        import subprocess
        import os

        drivers_path = os.path.join(os.getcwd(), "drivers", "local")
        
        if os.path.isdir(drivers_path):
            for file in os.listdir(drivers_path):
                file_path = os.path.join(drivers_path, file)
                if os.path.isfile(file_path) and file_path.lower().endswith('.exe'):
                    print(f"Running: {file_path} /SP- /SILENT /SUPPRESSMSGBOXES")
                    subprocess.run([file_path, "/SP-", "/SILENT", "/SUPPRESSMSGBOXES"])
        else:
            raise(f"Drivers path does not exist: {drivers_path}")