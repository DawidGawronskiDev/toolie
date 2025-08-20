import type { Option } from "@/types";
import { HardDrive } from "lucide-react";

export const options: Option[] = [
  {
    title: "Install Drivers",
    description:
      "To ensure proper functionality, please install the necessary drivers.",
    action: {
      icon: HardDrive,
      label: "Install Drivers",
    },
  },
];
