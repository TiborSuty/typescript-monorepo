import {isNil} from 'ramda';

import {CurrencyCodeType} from 'shared';

import {LocaleConfig} from '../../types/LocaleConfig';
import {formatCurrencySymbol} from '../CurrencySymbolFormat/formatCurrencySymbol';
import {currencies} from '../LocaleProvider/currencies';
import {_formatNumber} from '../NumberFormat/formatNumber';

export function formatCurrency(
  localeConfig: LocaleConfig,
  number: number,
  decimals?: number,
  currencyCode?: string
): string | null {
  const decimalDelimiter = localeConfig.currency.decimalSeparator ?? '';
  const thousandDelimiter = localeConfig.currency.thousandsSeparator ?? '';
  const numberFormatted = _formatNumber(decimalDelimiter, thousandDelimiter, number, decimals);

  if (isNaN(number)) return null;

  if (isNil(currencyCode)) return numberFormatted;

  const symbol = formatCurrencySymbol(currencies, currencyCode as CurrencyCodeType);

  return localeConfig.currency.position === 'after'
    ? `${numberFormatted}\xa0${symbol}`
    : `${symbol}\xa0${numberFormatted}`;
}
