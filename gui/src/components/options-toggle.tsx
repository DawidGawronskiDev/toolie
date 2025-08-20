import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

const OptionsToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button variant="secondary" onClick={onClick}>
      <ArrowLeftRight /> Toggle View
    </Button>
  );
};

export { OptionsToggle };
