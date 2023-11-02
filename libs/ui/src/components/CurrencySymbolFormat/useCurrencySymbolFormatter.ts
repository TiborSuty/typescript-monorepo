import {useMemo} from 'react';

import {Nullish, CurrencyCodeType} from 'shared';

import {useLocale} from '../../hooks/useLocale';
import {formatCurrencySymbol} from './formatCurrencySymbol';

export function useCurrencySymbolFormatter(): (currencyCode: CurrencyCodeType | Nullish) => string {
  const {currencies} = useLocale();

  return useMemo(() => formatCurrencySymbol.bind(null, currencies), [currencies]);
}
