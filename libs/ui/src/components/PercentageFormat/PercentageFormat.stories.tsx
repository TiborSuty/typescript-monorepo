import {PercentageFormat} from './PercentageFormat';

export default {
  title: 'Locale/PercentageFormat',
  component: PercentageFormat,
};

export function Default() {
  return <PercentageFormat number={0.789} />;
}

export function RoundNearest() {
  return <PercentageFormat number={0.50999999999} roundingType="nearest" />;
}

export function RoundDown() {
  return <PercentageFormat number={0.50999999999} roundingType="down" />;
}

export function RoundUp() {
  return <PercentageFormat number={0.501} roundingType="up" />;
}
