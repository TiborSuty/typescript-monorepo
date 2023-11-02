import {CurrencyCodeType} from 'shared';

import {useCurrencySymbolFormatter} from './useCurrencySymbolFormatter';

export type CurrencySymbolFormatProps = {
  currencyCode: CurrencyCodeType;
};

export function CurrencySymbolFormat(props: CurrencySymbolFormatProps) {
  const formatCurrencySymbol = useCurrencySymbolFormatter();

  return <>{formatCurrencySymbol(props.currencyCode)}</>;
}
