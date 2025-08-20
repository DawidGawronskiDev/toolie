import type { Option } from "@/types";
import { CircleFadingArrowUp, HardDrive, KeyRound, Wifi } from "lucide-react";

export const options: Option[] = [
  {
    title: "Install Drivers",
    description: "Install drivers and ensure proper functionality.",
    action: {
      icon: HardDrive,
      label: "Install Drivers",
    },
  },
  {
    title: "Connect to Internet",
    description: "Get access to the internet.",
    action: {
      icon: Wifi,
      label: "Connect to Internet",
    },
  },
  {
    title: "Upgrade to Windows 11 Pro",
    description: "Unlock advanced features and capabilities.",
    action: {
      icon: CircleFadingArrowUp,
      label: "Upgrade Now",
    },
  },
  {
    title: "Activate Windows 11 Pro",
    description: "Activate your copy of Windows 11 Pro.",
    action: {
      icon: CircleFadingArrowUp,
      label: "Activate Now",
    },
  },
  {
    title: "Inject Office Key",
    description: "Inject your Office product key.",
    action: {
      icon: KeyRound,
      label: "Inject Now",
    },
  },
];
