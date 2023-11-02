import {match, Pattern} from 'ts-pattern';

import {always} from 'ramda';
import {isNotNil} from 'ramda-adjunct';

import {Nullish} from 'shared';

/**
 * @param number Value to increment.
 * @param min Minimum value.
 * @param max Maximum value.
 * @param step Increment step. Default is 1.
 * @returns Incremeted number, `max` if it is greater than `max` or `min` if `number` is null.
 */
export function getIncrementedNumber(
  number: number | Nullish,
  min: number | Nullish,
  max: number | Nullish,
  step = 1
) {
  // Number(value) is used to handle cases where the number param is a string.
  const newValue = match([number, min])
    .with(
      [Pattern.union(Pattern.number, Pattern.string), Pattern.optional(Pattern.number)],
      ([value]) => Number(value) + step
    )
    .with([null, Pattern.number], ([, min]) => min)
    .otherwise(always(step));

  return isNotNil(max) && newValue > max ? max : newValue;
}
