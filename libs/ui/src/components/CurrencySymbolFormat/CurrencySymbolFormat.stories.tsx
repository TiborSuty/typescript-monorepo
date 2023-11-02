import {CurrencySymbolFormat} from './CurrencySymbolFormat';

export default {
  title: 'Locale/CurrencySymbolFormat',
  component: CurrencySymbolFormat,
};

export function CzkSymbol() {
  return <CurrencySymbolFormat currencyCode="CZK" />;
}

export function EurSymbol() {
  return <CurrencySymbolFormat currencyCode="EUR" />;
}
