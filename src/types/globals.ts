export {};

declare global {
  interface Window {
    __RUNTIME_CONFIG__: {
      NODE_ENV: string;
      REACT_APP_CLIENT_SECRET: string;
      REACT_APP_SERVER_URL: string;
      REACT_APP_CLIENT_ID: string;
    };
  }
}
