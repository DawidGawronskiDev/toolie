import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Power } from "lucide-react";

const HeaderActions = () => {
  return (
    <div className="space-x-2">
      <ModeToggle />
      <Button>
        <Power /> Quit
      </Button>
    </div>
  );
};

export { HeaderActions };
