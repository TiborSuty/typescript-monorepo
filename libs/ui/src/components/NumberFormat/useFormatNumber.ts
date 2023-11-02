import {Nullish} from 'shared';

import {useLocale} from '../../hooks/useLocale';
import {formatNumber} from './formatNumber';

export type NumberFormatter = (number: number | Nullish, decimals?: number) => string | null;

export function useFormatNumber(): NumberFormatter {
  const {localeConfig} = useLocale();

  return (number: number | Nullish, decimals?: number) =>
    formatNumber(localeConfig, number, decimals);
}
