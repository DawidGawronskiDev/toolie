import type { Option, PyWebView } from "@/types";
import {
  CircleFadingArrowUp,
  HardDrive,
  History,
  KeyRound,
  PowerOff,
  Wifi,
} from "lucide-react";
import { toast } from "sonner";

declare const pywebview: PyWebView;

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
      onClick: async () => {
        try {
          const res = await pywebview.api.connect_to_internet();
          console.log(res);

          if (res.success) {
            toast.success(res.message);
          } else {
            toast.error(`Error: ${res.error}`);
          }
        } catch (error) {
          console.error("Error calling connect_to_internet:", error);
          toast.error(`Error: ${error}`);
        }
      },
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
  {
    title: "Shutdown Windows",
    description: "Shut down your Windows 11 Pro.",
    action: {
      icon: PowerOff,
      label: "Shutdown Now",
    },
  },
  {
    title: "Get Model",
    description: "Get the model of your device.",
    action: {
      icon: History,
      label: "Get Model",
      onClick: async () => {
        try {
          const res = await pywebview.api.get_device_model();
          console.log(res);

          if (res.success) {
            toast.success(`Device model: ${res.data?.model}`);
          } else {
            toast.error(`Error: ${res.error}`);
          }
        } catch (error) {
          console.error("Error calling get_device_model:", error);
          toast.error(`Error: ${error}`);
        }
      },
    },
  },
];
