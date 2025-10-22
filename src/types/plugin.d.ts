declare global {
  interface Window {
    Jupiter: {
      init: (props: any) => void;
      resume: () => void;
      close: () => void;
      syncProps?: (props: any) => void;
    };
  }
}
export {};
