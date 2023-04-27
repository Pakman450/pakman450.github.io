/// <reference types="vite/client" />

export declare global {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": React.DetailedHTMLProps<
          React.AllHTMLAttributes<
            Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
          >,
          Partial<globalThis.HTMLElementTagNameMap['model-viewer']>
        >;
      }
    }
  }

declare module './assets/*.glb'
declare module '@google/model-viewer/dist/model-viewer'
