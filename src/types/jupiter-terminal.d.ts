import React from 'react';

declare global {
  namespace JSX {
    interface JupiterTerminalProps {
      'display-mode'?: 'integrated' | 'modal' | string;
      endpoint?: string;
      'default-output-mint'?: string;
      'strict-token-list'?: 'true' | 'false' | string;
    }

    interface IntrinsicElements {
      'jupiter-terminal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & JupiterTerminalProps;
    }
  }
}

export {};
