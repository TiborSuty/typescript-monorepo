import { defaultTo, isEmpty, isNil, pipe, replace, split, trim } from 'ramda';
import { LocaleConfig } from '../../../../types/LocaleConfig';
import { NEGATIVE_SIGN } from '../../../../constants/numberConstants';
import { _formatNumber } from '../../../NumberFormat/formatNumber';

export const getFormattedInputNumber = (
  numberLocale: LocaleConfig['number'],
  value: string | null
) => {
  if (isNil(value) || isEmpty(value)) return null;

  const sign = value?.startsWith(NEGATIVE_SIGN) ? NEGATIVE_SIGN : '';
  const [integerPart, decimalPart] = pipe(
    trim,
    replace(new RegExp(`\\${numberLocale.thousandsSeparator}`, 'g'), ''),
    split(numberLocale.decimalSeparator)
  )(value);
  const formattedIntegerPart = pipe(Number, Math.abs, defaultTo(0), (value) =>
    _formatNumber(
      numberLocale.decimalSeparator,
      numberLocale.thousandsSeparator,
      value
    )
  )(integerPart);

  return isNil(decimalPart)
    ? `${sign}${formattedIntegerPart}`
    : `${sign}${formattedIntegerPart}${numberLocale.decimalSeparator}${decimalPart}`;
};
