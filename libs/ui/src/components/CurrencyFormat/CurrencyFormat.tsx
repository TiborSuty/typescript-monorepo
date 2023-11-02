import {useLocale} from '../../hooks/useLocale';
import {formatCurrency} from './formatCurrency';

const DEFAULT_DECIMAL_NUMBERS = 0;

interface CurrencyFormatProps {
  number: number;
  decimals?: number;
  currency: string;
}

export function CurrencyFormat(props: CurrencyFormatProps) {
  const {localeConfig} = useLocale();
  const decimals = props.decimals ?? DEFAULT_DECIMAL_NUMBERS;

  return <>{formatCurrency(localeConfig, props.number, decimals, props.currency)}</>;
}
