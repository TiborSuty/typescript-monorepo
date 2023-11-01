import {CSSProp} from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

declare global {
  interface Window {
    ignoreInitialPropsRouter: boolean
  }
  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */

    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
