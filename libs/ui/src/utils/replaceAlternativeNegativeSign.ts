import {replace} from 'ramda';

import {NEGATIVE_SIGN} from '../constants/numberConstants';

/**
 * Replaces alternative negative signs with the correct one.
 */
export const replaceAlternativeNegativeSign = (value: string | null) =>
  value && replace(/‐|‑|−|–|—/, NEGATIVE_SIGN, value);
