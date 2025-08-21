import { ModeToggle } from "@/components/mode-toggle";
import { QuitButton } from "../quit-button";

const HeaderActions = () => {
  return (
    <div className="space-x-2">
      <ModeToggle />
      <QuitButton />
    </div>
  );
};

export { HeaderActions };
