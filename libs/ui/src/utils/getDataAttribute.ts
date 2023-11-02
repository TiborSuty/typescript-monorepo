import {match} from 'ts-pattern';

import {always} from 'ramda';

import {Nullish} from 'shared';

export const getDataAttribute = (condition: boolean | Nullish) =>
  match(condition)
    .with(true, always('true'))
    .with(false, always('false'))
    .otherwise(always(undefined));
