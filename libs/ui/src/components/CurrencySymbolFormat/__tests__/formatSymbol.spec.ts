import {currencies} from '../../LocaleProvider/currencies';
import {formatCurrencySymbol} from '../formatCurrencySymbol';

describe('formatCurrencySymbol', () => {
  it('should format symbol', () => {
    expect(formatCurrencySymbol(currencies, 'EUR')).toEqual('€');
    expect(formatCurrencySymbol(currencies, 'CZK')).toEqual('Kč');
  });
  it('handle nullish values', () => {
    expect(formatCurrencySymbol(currencies, null)).toEqual('');
    expect(formatCurrencySymbol(currencies, undefined)).toEqual('');
  });
});
