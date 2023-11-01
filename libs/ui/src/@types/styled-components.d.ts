import 'styled-components';
import 'styled-components/cssprop';

import { DefaultFoundationTheme } from '../libs/ui/src/theme/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultFoundationTheme {}
}
