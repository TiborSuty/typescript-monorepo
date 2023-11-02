import {match, Pattern} from 'ts-pattern';

import {always} from 'ramda';
import {isNotNil} from 'ramda-adjunct';

import {Nullish} from 'shared';

/**
 * @param number Value to decrement.
 * @param min Minimum value.
 * @param step Decrement step. Default is 1.
 * @returns Decremented number, `min` if it is less than `min` or if `number` is null.
 */
export function getDecrementedNumber(number: number | Nullish, min: number | Nullish, step = 1) {
  // Number(value) is used to handle cases where the number param is a string.
  const newValue = match([number, min])
    .with(
      [Pattern.union(Pattern.number, Pattern.string), Pattern.optional(Pattern.number)],
      ([value]) => Number(value) - step
    )
    .with([null, Pattern.number], ([, min]) => min)
    .otherwise(always(-step));

  return isNotNil(min) && newValue < min ? min : newValue;
}
