import { Power } from "lucide-react";
import { Button } from "./ui/button";
import { useMobile } from "@/hooks/useMobile";
import type { PyWebView } from "@/types";

declare const pywebview: PyWebView;

const QuitButton = () => {
  const { isMobile } = useMobile();

  const handleClick = () => {
    pywebview.api.close_window();
  };

  return (
    <Button size={isMobile ? "icon" : "default"} onClick={handleClick}>
      <Power />
      {!isMobile && " Quit"}
    </Button>
  );
};

export { QuitButton };
