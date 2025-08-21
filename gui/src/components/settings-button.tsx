import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useMobile } from "@/hooks/useMobile";

const SettingsButton = () => {
  const { isMobile } = useMobile();

  return (
    <Button variant="outline" size={isMobile ? "icon" : "default"}>
      <Settings />
      {!isMobile && " Settings"}
    </Button>
  );
};

export { SettingsButton };
