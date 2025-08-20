import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const Header = () => {
  return (
    <header className="container py-4">
      <div className="w-full flex items-center justify-between">
        <h1>Toolie</h1>
        <Button>
          <Power /> Quit
        </Button>
      </div>
    </header>
  );
};

export { Header };
