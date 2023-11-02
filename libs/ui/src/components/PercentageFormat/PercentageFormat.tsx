import {isNil} from 'ramda';

import {Nullish} from 'shared';

import {useLocale} from '../../hooks/useLocale';
import {formatPercentage, RoundingType} from './formatPercentage';

interface PercentageFormatProps {
  number: number | Nullish;
  roundingType?: RoundingType;
}

export function PercentageFormat(props: PercentageFormatProps) {
  const {localeConfig} = useLocale();

  if (isNil(props.number)) return null;

  return <>{formatPercentage(props.number, localeConfig, props.roundingType)}</>;
}
