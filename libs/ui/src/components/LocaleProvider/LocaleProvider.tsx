import {ReactNode, useMemo} from 'react';

import {defaultTo} from 'ramda';

import {Nullish} from 'shared';

import {LocaleContextProvider} from '../../hooks/useLocale';
import {Currency} from '../../types/Currency';
import {LocaleConfig} from '../../types/LocaleConfig';
import {getAppLanguageFromString} from '../../utils/getAppLanguageFromString';
import {getDefaultLocaleByAppLanguage} from '../../utils/getDefaultLocaleByAppLanguage';
import {currencies} from './currencies';

interface LocaleProviderProps {
  children: ReactNode;
  config?: LocaleConfig | Nullish;
  language?: string;
  currencies?: Currency[];
}

export function LocaleProvider(props: LocaleProviderProps) {
  const appLanguage = getAppLanguageFromString(props.language);
  const contextValue = useMemo(
    () => ({
      language: appLanguage,
      currencies: defaultTo(currencies, props.currencies),
      localeConfig: props.config ?? getDefaultLocaleByAppLanguage(appLanguage),
    }),
    [appLanguage, props.config, props.currencies]
  );

  return <LocaleContextProvider value={contextValue}>{props.children}</LocaleContextProvider>;
}
