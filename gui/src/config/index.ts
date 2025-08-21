import {
  connectToInternet,
  getModel,
  installLocalDrivers,
  installRemoteDrivers,
} from "@/lib/option-actions";
import type { Option } from "@/types";
import {
  IconBrandWindows,
  IconKey,
  IconSettings,
  IconSitemap,
  IconWifi,
} from "@tabler/icons-react";
import {
  CircleFadingArrowUp,
  HardDrive,
  History,
  KeyRound,
  PowerOff,
  Wifi,
} from "lucide-react";

export const options: Option[] = [
  {
    title: "Install Drivers",
    description: "Install drivers and ensure proper functionality.",
    category: {
      label: "Drivers",
      icon: IconSettings,
    },
    action: {
      icon: HardDrive,
      label: "Install Drivers",
      onClick: () => installRemoteDrivers(),
    },
  },
  {
    title: "Install Local Drivers",
    description: "Install drivers located on your pendrive.",
    category: {
      label: "Drivers",
      icon: IconSettings,
    },
    action: {
      icon: Wifi,
      label: "Install Local Drivers",
      onClick: () => installLocalDrivers(),
    },
  },
  {
    title: "Connect to Internet",
    description: "Get access to the internet.",
    category: {
      label: "Network",
      icon: IconWifi,
    },
    action: {
      icon: Wifi,
      label: "Connect to Internet",
      onClick: () => connectToInternet(),
    },
  },
  {
    title: "Upgrade to Windows 11 Pro",
    description: "Unlock advanced features and capabilities.",
    category: {
      label: "Windows",
      icon: IconBrandWindows,
    },
    action: {
      icon: CircleFadingArrowUp,
      label: "Upgrade Now",
    },
  },
  {
    title: "Activate Windows 11 Pro",
    description: "Activate your copy of Windows 11 Pro.",
    category: {
      label: "Licenses",
      icon: IconKey,
    },
    action: {
      icon: CircleFadingArrowUp,
      label: "Activate Now",
    },
  },
  {
    title: "Inject Office Key",
    description: "Inject your Office product key.",
    category: {
      label: "Licenses",
      icon: IconKey,
    },
    action: {
      icon: KeyRound,
      label: "Inject Now",
    },
  },
  {
    title: "Shutdown Windows",
    description: "Shut down your Windows 11 Pro.",
    category: {
      label: "Windows",
      icon: IconBrandWindows,
    },
    action: {
      icon: PowerOff,
      label: "Shutdown Now",
    },
  },
  {
    title: "Get Model",
    description: "Get the model of your device.",
    category: {
      label: "System",
      icon: IconSitemap,
    },
    action: {
      icon: History,
      label: "Get Model",
      onClick: () => getModel(),
    },
  },
];
