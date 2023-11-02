import { isNotNilOrEmpty } from 'ramda-adjunct';
import { Nullish } from '../types/Nullish';
import { currencyCodes, CurrencyCodeType } from '../types/CurrencyCodes';

export const isCurrency = (val: string | Nullish): val is CurrencyCodeType =>
  isNotNilOrEmpty(val) && currencyCodes.includes(val as CurrencyCodeType);
