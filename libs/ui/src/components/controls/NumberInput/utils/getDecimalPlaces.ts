import {pipe, splitEvery, split, last, length, includes} from 'ramda';

import {Nullish} from 'shared';

/**
 * @param delimiter Decimal delimiter.
 * @param value Number as string.
 * @returns Number of decimal places.
 */
export const getDecimalPlaces = (delimiter: string, value: string | Nullish) =>
  value && includes(delimiter, value)
    ? pipe(split(delimiter), last, splitEvery(1), length)(value)
    : 0;
