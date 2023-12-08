import { MessageType } from './props';

export type { MessageType };

declare global {
  interface Window {
    gtag: T;
  }
}
