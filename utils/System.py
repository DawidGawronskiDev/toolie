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
        result = subprocess.run(["powershell", "-command", "(New-Object -ComObject Microsoft.Update.AutoUpdate).DetectNow()"], check=True, text=True)
        if result.returncode != 0:
            raise subprocess.CalledProcessError(result.returncode, result.args)
        else :
            return "Windows Update initiated successfully."