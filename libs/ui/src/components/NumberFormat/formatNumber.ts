import {reverse, isNil} from 'ramda';
import {isNotNil} from 'ramda-adjunct';

import {Nullish} from 'shared';

import {LocaleConfig} from '../../types/LocaleConfig';

export function _formatNumber(
  decimalDelimiter: string,
  thousandDelimiter: string,
  number: number | Nullish,
  decimals?: number
) {
  if (isNil(number)) return null;

  const sign = number < 0 ? '-' : '';

  const absoluteNumber = Math.abs(number);
  const trimmed = isNotNil(decimals) ? absoluteNumber.toFixed(decimals) : absoluteNumber;

  const [numberBeforeDecimal, numberAfterDecimal] = trimmed.toString().split('.');

  const result = reverse([...numberBeforeDecimal]).reduce((acc, char, index) =>
    index % 3 === 0 && index !== 0 ? `${char}${thousandDelimiter}${acc}` : `${char}${acc}`
  );

  return numberAfterDecimal
    ? `${sign}${result}${decimalDelimiter}${numberAfterDecimal}`
    : `${sign}${result}`;
}

export function formatNumber(
  localeConfig: LocaleConfig,
  number: number | Nullish,
  decimals?: number
): string | null {
  const decimalDelimiter = localeConfig.number.decimalSeparator ?? '';
  const thousandDelimiter = localeConfig.number.thousandsSeparator ?? '';

  return _formatNumber(decimalDelimiter, thousandDelimiter, number, decimals);
}
