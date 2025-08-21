export type PyWebView = {
  api: {
    close_window: () => void;
  };
};

export type Option = {
  title: string;
  description: string;
  action: {
    icon: React.ElementType;
    label: string;
  };
};
