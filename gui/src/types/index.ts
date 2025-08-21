export type PyWebView = {
  api: {
    close_window: () => void;
    get_device_model: () => Promise<{
      success: boolean;
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
