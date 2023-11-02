import {match, Pattern} from 'ts-pattern';

import {always} from 'ramda';
import {ceil, floor, round} from 'ramda-adjunct';

import {Nullish} from 'shared';

import {LocaleConfig} from '../../types/LocaleConfig';
import {formatNumber} from '../NumberFormat/formatNumber';

const PERCENTAGE_MULTIPLIER = 100;

export type RoundingType = 'up' | 'down' | 'nearest';

export function formatPercentage(
  number: number,
  localeConfig: LocaleConfig,
  roundingType: RoundingType | Nullish = null
) {
  const percentage = number * PERCENTAGE_MULTIPLIER;
  const percentageValue = match(roundingType)
    .with('nearest', () => round(percentage))
    .with('up', () => ceil(percentage))
    .with('down', () => floor(percentage))
    .with(Pattern.nullish, always(percentage))
    .exhaustive();

  return `${formatNumber(localeConfig, percentageValue)} %`;
}
