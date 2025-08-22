import type { PyWebView } from "@/types";
import { toast } from "sonner";

declare const pywebview: PyWebView;

export const connectToInternet = async () => {
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
};

export const getModel = async () => {
  try {
    const res = await pywebview.api.get_device_model();

    if (res.success) {
      toast.success(`Device model: ${res.data?.model}`);
    } else {
      toast.error(`Error: ${res.error}`);
    }
  } catch (error) {
    console.error("Error calling get_device_model:", error);
    toast.error(`Error: ${error}`);
  }
};

export const installRemoteDrivers = async () => {
  try {
    const res = await pywebview.api.install_remote_drivers();
    console.log(res);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(`Error: ${res.error}`);
    }
  } catch (error) {
    console.error("Error calling install_remote_drivers:", error);
    toast.error(`Error: ${error}`);
  }
};

export const installLocalDrivers = async () => {
  try {
    const res = await pywebview.api.install_local_drivers();
    console.log(res);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(`Error: ${res.error}`);
    }
  } catch (error) {
    console.error("Error calling install_local_drivers:", error);
    toast.error(`Error: ${error}`);
  }
};

export const runWindowsUpdate = async () => {
  try {
    const res = await pywebview.api.run_windows_update();
    console.log(res);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(`Error: ${res.error}`);
    }
  } catch (error) {
    console.error("Error calling run_windows_update:", error);
    toast.error(`Error: ${error}`);
  }
};

export const upgradeWindowsToPro = async () => {
  try {
    const res = await pywebview.api.upgrade_windows_to_pro();
    console.log(res);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(`Error: ${res.error}`);
    }
  } catch (error) {
    console.error("Error calling upgrade_windows_to_pro:", error);
    toast.error(`Error: ${error}`);
  }
};
