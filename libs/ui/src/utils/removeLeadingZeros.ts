import {replace} from 'ramda';

import {Nullish} from 'shared';

/**
 * @param value Number as string.
 * @returns Number as string without leading zeros.
 */
export const removeLeadingZeros = (value: string | Nullish) =>
  replace(/^0+(\d+)/, '$1', value ?? '');
