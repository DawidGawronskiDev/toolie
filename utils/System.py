class System:
    def __init__(self):
        pass

    def get_model(self):
        import subprocess
        import json

        command = [
            "powershell",
            "-Command",
            "Get-CimInstance Win32_ComputerSystem | Select-Object Model | ConvertTo-Json"
        ]

        result = subprocess.run(command, capture_output=True, text=True)
        data = json.loads(result.stdout)
        return data["Model"]
    
    def install_drivers(self):
        import subprocess
        import os
        model = self.get_model()

        drivers_path = os.path.join(os.getcwd(), "drivers", model)
        
        if os.path.isdir(drivers_path):
            for file in os.listdir(drivers_path):
                file_path = os.path.join(drivers_path, file)
                if os.path.isfile(file_path) and file_path.lower().endswith('.exe'):
                    print(f"Running: {file_path} /SP- /SILENT /SUPPRESSMSGBOXES")
                    subprocess.run([file_path, "/SP-", "/SILENT", "/SUPPRESSMSGBOXES"])
        else:
            print(f"Drivers path does not exist: {drivers_path}")