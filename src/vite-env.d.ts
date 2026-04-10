/// <reference types="vite/client" />

interface Window {
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
