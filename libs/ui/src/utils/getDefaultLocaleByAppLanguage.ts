import {match} from 'ts-pattern';

import {always} from 'ramda';

import {AppLanguage} from '../types/AppLanguage';
import {LocaleConfig} from '../types/LocaleConfig';
import {defaultLocaleConfigs} from './defaultLocaleConfigs';

export function getDefaultLocaleByAppLanguage(language: AppLanguage): LocaleConfig {
  return match(language)
    .with('cs', always(defaultLocaleConfigs.cs))
    .with('en', always(defaultLocaleConfigs.en))
    .with('es', always(defaultLocaleConfigs.es))
    .with('sk', always(defaultLocaleConfigs.sk))
    .with('de', always(defaultLocaleConfigs.de))
    .with('pl', always(defaultLocaleConfigs.pl))
    .with('it', always(defaultLocaleConfigs.it))
    .with('fr', always(defaultLocaleConfigs.fr))
    .exhaustive();
}
