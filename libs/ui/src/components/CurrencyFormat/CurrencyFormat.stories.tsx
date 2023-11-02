import {CurrencyFormat} from './CurrencyFormat';

export default {
  title: 'Locale/CurrencyFormat',
  component: CurrencyFormat,
};

export function Default() {
  return <CurrencyFormat number={342349814.213213} currency="EUR" />;
}

export function WithDecimals() {
  return <CurrencyFormat number={342349814.213213} decimals={2} currency="CZK" />;
}
