declare global {
  interface Window {
    Jupiter: {
      init: (props: Record<string, unknown>) => void;
      resume: () => void;
      close: () => void;
      syncProps?: (props: Record<string, unknown>) => void;
    };
  }
}

export {};
