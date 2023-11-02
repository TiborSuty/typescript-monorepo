import {cs, sk, fr, it, es, de, pl, enUS} from 'date-fns/locale';
import {match} from 'ts-pattern';

import {always} from 'ramda';

import {Nullish} from 'shared';

export function convertStringLocaleToDateFns(locale: string | Nullish): Locale {
  return match(locale)
    .with('cs', always(cs))
    .with('sk', always(sk))
    .with('fr', always(fr))
    .with('pl', always(pl))
    .with('de', always(de))
    .with('es', always(es))
    .with('it', always(it))
    .with('en', always(enUS))
    .otherwise(always(enUS));
}
