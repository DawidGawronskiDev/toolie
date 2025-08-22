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

        if result.returncode == 0:
            data = json.loads(result.stdout)
            return {
                "success": True,
                "message": result.stdout,
                "data": {
                    "model": data["Model"]
                }
            }
        else:
            return {
                "success": False,
                "error": result.stdout
            }
    
    # This does not work
    def run_windows_update(self):
        import subprocess
        result = subprocess.run(["powershell", "-command", "(New-Object -ComObject Microsoft.Update.AutoUpdate).DetectNow()"], check=True, text=True)
        if result.returncode != 0:
            raise subprocess.CalledProcessError(result.returncode, result.args)
        else :
            return "Windows Update initiated successfully."
        
    def upgrade_windows_to_pro(self):
        import subprocess
        from utils.Settings import Settings
        upgrade_key = Settings().get_settings()["keys"]["upgrade_key"]
        result = subprocess.run(
            ["powershell", "changepk.exe", "/ProductKey", upgrade_key],
            check=True
        )

        if result.returncode == 0:
            return {
                "success": True,
                "message": result.stdout
            }
        else:
            return {
                "success": False,
                "error": result.stdout
            }