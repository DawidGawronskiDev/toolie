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
  };
};

export type Option = {
  title: string;
  description: string;
  action: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
  };
};
