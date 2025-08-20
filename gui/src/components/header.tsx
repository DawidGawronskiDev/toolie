import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const Header = () => {
  return (
    <header className="container py-4">
      <div className="w-full flex items-center justify-between">
        <h1>Toolie</h1>
        <div className="space-x-2">
          <ModeToggle />
          <Button>
            <Power /> Quit
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
