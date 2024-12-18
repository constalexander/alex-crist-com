declare global {
  interface Window {
    _gs: (command: string, ...args: any[]) => void;
  }
}

export {};
