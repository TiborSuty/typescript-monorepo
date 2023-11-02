import {cs, enUS, es, sk, de, pl, it, fr} from 'date-fns/locale';
import {match} from 'ts-pattern';

import {always} from 'ramda';

import {AppLanguage} from '../types/AppLanguage';

export function convertAppLanguageToDateFns(locale: AppLanguage): Locale {
  return match(locale)
    .with('cs', always(cs))
    .with('en', always(enUS))
    .with('es', always(es))
    .with('sk', always(sk))
    .with('de', always(de))
    .with('pl', always(pl))
    .with('it', always(it))
    .with('fr', always(fr))
    .exhaustive();
}
