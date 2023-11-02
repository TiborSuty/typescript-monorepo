import {currencies} from '../../LocaleProvider/currencies';
import {formatCurrencySymbol} from '../formatCurrencySymbol';

describe('formatCurrencySymbol', () => {
  it('should formatCurrencySymbol', () => {
    expect(formatCurrencySymbol(currencies, 'EUR')).toEqual('€');
    expect(formatCurrencySymbol(currencies, 'CZK')).toEqual('Kč');
  });
});
