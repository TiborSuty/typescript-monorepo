import {Nullish, CurrencyCodeType} from 'shared';

import {Currency} from '../../types/Currency';

export function formatCurrencySymbol(
  currencies: Currency[],
  currencyCode: CurrencyCodeType | Nullish
): string {
  return currencies.find((curr) => curr.code === currencyCode)?.symbol ?? '';
}
