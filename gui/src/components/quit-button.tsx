import { Power } from "lucide-react";
import { Button } from "./ui/button";
import { useMobile } from "@/hooks/useMobile";

const QuitButton = () => {
  const { isMobile } = useMobile();

  return (
    <Button size={isMobile ? "icon" : "default"}>
      <Power />
      {!isMobile && " Quit"}
    </Button>
  );
};

export { QuitButton };
