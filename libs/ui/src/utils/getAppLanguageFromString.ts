import {match} from 'ts-pattern';

import {always} from 'ramda';

import {Nullish} from 'shared';

import {AppLanguage} from '../types/AppLanguage';

export function getAppLanguageFromString(language: string | Nullish): AppLanguage {
  return match<string | Nullish, AppLanguage>(language)
    .with('cs', always('cs'))
    .with('en', always('en'))
    .with('es', always('es'))
    .with('sk', always('sk'))
    .with('de', always('de'))
    .with('pl', always('pl'))
    .with('it', always('it'))
    .with('fr', always('fr'))
    .otherwise(always('cs'));
}
