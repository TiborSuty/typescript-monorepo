import { AppLanguage } from '../types/AppLanguage';
import { Currency } from '../types/Currency';
import { LocaleConfig } from '../types/LocaleConfig';
import { createContext } from '../utils/createContext';

type LocaleContextValue = {
  localeConfig: LocaleConfig;
  language: AppLanguage;
  currencies: Currency[];
};

const [LocaleContextProvider, useLocale] = createContext<LocaleContextValue>({
  strict: true,
  name: 'LocaleProvider',
});

export { LocaleContextProvider, useLocale };
