import { useEffect, useState } from "react";

const MIN_WIDTH = 768;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MIN_WIDTH);

  useEffect(() => {
    const eventListener = () => {
      setIsMobile(window.innerWidth < MIN_WIDTH);
    };

    window.addEventListener("resize", eventListener);
    return () => {
      window.removeEventListener("resize", eventListener);
    };
  }, []);

  return { isMobile };
};

export { useMobile };
