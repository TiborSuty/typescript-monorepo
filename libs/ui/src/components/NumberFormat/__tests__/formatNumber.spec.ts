import {defaultLocaleConfigs} from '../../../utils/defaultLocaleConfigs';
import {formatNumber} from '../formatNumber';

describe('formatNumber', () => {
  it('should return formatted number', () => {
    expect(formatNumber(defaultLocaleConfigs.cs, -1234.2399, 2)).toEqual('-1\xa0234,24');
    expect(formatNumber(defaultLocaleConfigs.cs, 1234.2399, 2)).toEqual('1\xa0234,24');
    expect(formatNumber(defaultLocaleConfigs.cs, -1234, 2)).toEqual('-1\xa0234,00');
    expect(formatNumber(defaultLocaleConfigs.cs, -1234567890.2399, 0)).toEqual(
      '-1\xa0234\xa0567\xa0890'
    );
    expect(formatNumber(defaultLocaleConfigs.cs, 1234567890.2399, 2)).toEqual(
      '1\xa0234\xa0567\xa0890,24'
    );
    expect(formatNumber(defaultLocaleConfigs.cs, 1, 2)).toEqual('1,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 12, 2)).toEqual('12,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 123, 2)).toEqual('123,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 1234, 2)).toEqual('1\xa0234,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 12345, 2)).toEqual('12\xa0345,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 123456, 2)).toEqual('123\xa0456,00');
    expect(formatNumber(defaultLocaleConfigs.cs, 1234567, 2)).toEqual('1\xa0234\xa0567,00');
    expect(formatNumber(defaultLocaleConfigs.en, -1234.2399, 2)).toEqual('-1,234.24');
    expect(formatNumber(defaultLocaleConfigs.en, 1234.2399, 2)).toEqual('1,234.24');
    expect(formatNumber(defaultLocaleConfigs.en, -1234, 2)).toEqual('-1,234.00');
    expect(formatNumber(defaultLocaleConfigs.en, -1234567890.2399, 0)).toEqual('-1,234,567,890');
    expect(formatNumber(defaultLocaleConfigs.en, 1234567890.2399, 2)).toEqual('1,234,567,890.24');
    expect(formatNumber(defaultLocaleConfigs.en, 12, 2)).toEqual('12.00');
  });

  it('should display whole number when no decimals specified', () => {
    expect(formatNumber(defaultLocaleConfigs.cs, -1234.123456789)).toEqual('-1\xa0234,123456789');
    expect(formatNumber(defaultLocaleConfigs.cs, -1234.1234)).toEqual('-1\xa0234,1234');
    expect(formatNumber(defaultLocaleConfigs.cs, -1234.1)).toEqual('-1\xa0234,1');
    expect(formatNumber(defaultLocaleConfigs.cs, -1234)).toEqual('-1\xa0234');
  });

  it('handles nullish values', () => {
    expect(formatNumber(defaultLocaleConfigs.cs, null)).toBeNull();
    expect(formatNumber(defaultLocaleConfigs.cs, undefined)).toBeNull();
  });
});
