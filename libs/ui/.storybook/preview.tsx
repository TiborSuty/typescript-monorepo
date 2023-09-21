import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div>{Story()}</div>
    </ThemeProvider>
  ),
];
