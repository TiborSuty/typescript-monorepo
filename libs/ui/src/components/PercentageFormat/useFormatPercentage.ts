import {Nullish} from 'shared';

import {useLocale} from '../../hooks/useLocale';
import {RoundingType, formatPercentage} from './formatPercentage';

export function useFormatPercentage() {
  const {localeConfig} = useLocale();

  return (number: number, roundingType: RoundingType | Nullish = null) =>
    formatPercentage(number, localeConfig, roundingType);
}
