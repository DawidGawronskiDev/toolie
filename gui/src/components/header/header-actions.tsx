import { ModeToggle } from "@/components/mode-toggle";
import { QuitButton } from "@/components/quit-button";
import { SettingsButton } from "@/components/settings-button";

const HeaderActions = () => {
  return (
    <div className="space-x-2">
      <ModeToggle />
      <SettingsButton />
      <QuitButton />
    </div>
  );
};

export { HeaderActions };
