import { pipe, replace } from 'ramda';
import { LocaleConfig } from '../../../../types/LocaleConfig';
import { Nullish } from '../../../../types/Nullish';
import { DECIMAL_DOT } from '../../../../constants/numberConstants';

export const getNumberFromString = (
  numberLocale: LocaleConfig['number'],
  value: string | Nullish
) =>
  pipe(
    replace(new RegExp(`\\${numberLocale.thousandsSeparator}`, 'g'), ''),
    replace(numberLocale.decimalSeparator, DECIMAL_DOT),
    Number
  )(value ?? '');
