from utils.Settings import Settings

class Internet:
    def __init__(self):
        self.settings = Settings().get_settings()["internet"]

    def connect(self):
        import subprocess

        wifi_profile = self.get_internet_profile()

        profile_path = "wifi_profile.xml"
        with open(profile_path, "w") as f:
            f.write(wifi_profile)

        subprocess.run(["netsh", "wlan", "add", "profile", f"filename={profile_path}"], capture_output=True, text=True)
        result = subprocess.run(["netsh", "wlan", "connect", f"name={self.settings['ssid']}"], capture_output=True, text=True)

        print(result)
        if result.returncode == 0:
            return {
                "success": True,
                "message": result.stdout
            }
        else:
            return {
                "success": False,
                "error": result.stdout,
            }

    def get_internet_profile(self):
        return f"""<?xml version="1.0"?>
    <WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
        <name>{self.settings["ssid"]}</name>
        <SSIDConfig>
            <SSID>
                <name>{self.settings["ssid"]}</name>
            </SSID>
        </SSIDConfig>
        <connectionType>ESS</connectionType>
        <connectionMode>auto</connectionMode>
        <MSM>
            <security>
                <authEncryption>
                    <authentication>WPA2PSK</authentication>
                    <encryption>AES</encryption>
                    <useOneX>false</useOneX>
                </authEncryption>
                <sharedKey>
                    <keyType>passPhrase</keyType>
                    <protected>false</protected>
                    <keyMaterial>{self.settings["password"]}</keyMaterial>
                </sharedKey>
            </security>
        </MSM>
    </WLANProfile>
    """