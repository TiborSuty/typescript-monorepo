import {replace} from 'ramda';

import {Nullish} from 'shared';

const RADIX = 10;

/**
 * @param value Number as string
 * @returns Value in number type
 */
export const getNumberFromString = (value: string | Nullish) =>
  value ? parseInt(replace(/[^\d-]/g, '', value), RADIX) : 0;
