import {defaultLocaleConfigs} from '../../../utils/defaultLocaleConfigs';
import {formatCurrency} from '../formatCurrency';

describe('formatCurrency', () => {
  it('should return formatted currency in czech locale', () => {
    expect(formatCurrency(defaultLocaleConfigs.cs, -1234.2399, 0, 'EUR')).toEqual('-1\xa0234\xa0€');
    expect(formatCurrency(defaultLocaleConfigs.cs, 1234.2399, 2, 'CZK')).toEqual(
      '1\xa0234,24\xa0Kč'
    );
  });
  it('should return formatted currency in english locale', () => {
    expect(formatCurrency(defaultLocaleConfigs.en, -1234.2399, 2, 'EUR')).toEqual('€\xa0-1,234.24');
    expect(formatCurrency(defaultLocaleConfigs.en, 1234.2399, 2, 'CZK')).toEqual('Kč\xa01,234.24');
  });
});
