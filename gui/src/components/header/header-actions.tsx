import { ModeToggle } from "@/components/cta/mode-toggle";
import { QuitButton } from "@/components/cta/quit-button";
import { SettingsButton } from "@/components/cta/settings-button";

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
