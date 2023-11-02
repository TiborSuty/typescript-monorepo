import {NumberFormat} from './NumberFormat';

export default {
  title: 'Locale/NumberFormat',
  component: NumberFormat,
};

export function WithDecimals() {
  return <NumberFormat number={987654321.234123} decimals={2} />;
}
