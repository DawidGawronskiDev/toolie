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
    
    def run_windows_update(self):
        import subprocess
        subprocess.run(["powershell", "-Command", "Install-WindowsUpdate -AcceptAll -AutoReboot"], check=True)