import {useLocale} from '../../hooks/useLocale';
import {formatCurrency} from './formatCurrency';

const DEFAULT_DECIMAL_NUMBERS = 0;

export type CurrencyFormatter = (
  number: number,
  currency: string,
  decimals?: number
) => string | null;

export function useFormatCurrency(): CurrencyFormatter {
  const {localeConfig} = useLocale();

  return (number: number, currency: string, decimals = DEFAULT_DECIMAL_NUMBERS) =>
    formatCurrency(localeConfig, number, decimals, currency);
}
