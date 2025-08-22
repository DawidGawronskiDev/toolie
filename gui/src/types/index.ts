export type PyWebView = {
  api: {
    close_window: () => void;
    get_device_model: () => Promise<{
      success: boolean;
      message?: string;
      data?: {
        model: string;
      };
      error?: string;
    }>;
    connect_to_internet: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
    install_remote_drivers: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
    install_local_drivers: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
    run_windows_update: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
    upgrade_windows_to_pro: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
    shutdown: () => Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }>;
  };
};

export type Option = {
  title: string;
  description: string;
  category: {
    label: string;
    icon: React.ElementType;
  };
  action: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
  };
};
