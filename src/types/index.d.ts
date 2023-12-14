import * as propsTypes from './props';
import * as dataTypes from './data';

export { propsTypes, dataTypes };

declare global {
  interface Window {
    gtag: T;
  }
}
