import {Nullish} from 'shared';

import {useLocale} from '../../hooks/useLocale';
import {formatNumber} from './formatNumber';

interface NumberFormatProps {
  number: number | Nullish;
  decimals?: number;
}

export function NumberFormat(props: NumberFormatProps) {
  const {localeConfig} = useLocale();

  return <>{formatNumber(localeConfig, props.number, props.decimals)}</>;
}
