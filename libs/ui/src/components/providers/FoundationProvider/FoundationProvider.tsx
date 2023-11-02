import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ReactNode, useEffect, useMemo } from 'react';

import { mergeDeepRight } from 'ramda';
import { DeviceProvider } from '../DeviceProvider/DeviceProvider';
import { DefaultFoundationTheme, foundationTheme } from '../../../theme/theme';
import { LocaleProvider } from '../../LocaleProvider/LocaleProvider';
import { TranslationProvider } from '../TranslationProvider/TranslationProvider';

export type FoundationProviderProps = {
  theme?: Record<string, unknown>;
  children?: ReactNode;
};

export function FoundationProvider(props: FoundationProviderProps) {
  const mergedTheme = useMemo(
    () => mergeDeepRight(foundationTheme, props.theme ?? {}),
    [props.theme]
  );

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.style.setProperty(
      '--eag-space-step',
      (mergedTheme as DefaultFoundationTheme).space.step.toString()
    );
  }, [mergedTheme]);

  return (
    // Turn off because of chakra theme - remove when chakra is gone
    // eslint-disable-next-line no-restricted-syntax
    <ThemeProvider theme={mergedTheme as unknown as DefaultTheme}>
      <TranslationProvider>
        <LocaleProvider>
          <DeviceProvider>{props.children}</DeviceProvider>
        </LocaleProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
}
