import {defaultLocaleConfigs} from 'platform/locale';

import {getFormattedInputNumber} from '../utils/getFormattedInputNumber';

describe('getFormattedInputNumber', () => {
  const numberLocale = defaultLocaleConfigs.cs.number;

  it('Should return correctly formatted number', () => {
    expect(getFormattedInputNumber(numberLocale, '500')).toBe('500');
    expect(getFormattedInputNumber(numberLocale, '5000')).toBe('5\xa0000');
    expect(getFormattedInputNumber(numberLocale, '50000')).toBe('50\xa0000');
    expect(getFormattedInputNumber(numberLocale, '500000')).toBe('500\xa0000');
    expect(getFormattedInputNumber(numberLocale, '5000000')).toBe('5\xa0000\xa0000');
    expect(getFormattedInputNumber(numberLocale, '5000000,5000')).toBe('5\xa0000\xa0000,5000');
    expect(getFormattedInputNumber(numberLocale, '500,')).toBe('500,');
    expect(getFormattedInputNumber(numberLocale, '500,5000')).toBe('500,5000');
    expect(getFormattedInputNumber(numberLocale, '-123')).toBe('-123');
    expect(getFormattedInputNumber(numberLocale, '-1234')).toBe('-1\xa0234');
    expect(getFormattedInputNumber(numberLocale, '-12345')).toBe('-12\xa0345');
    expect(getFormattedInputNumber(numberLocale, '-123456')).toBe('-123\xa0456');
    expect(getFormattedInputNumber(numberLocale, '-0')).toBe('-0');
    expect(getFormattedInputNumber(numberLocale, '-0,')).toBe('-0,');
    expect(getFormattedInputNumber(numberLocale, '-0,000')).toBe('-0,000');
    expect(getFormattedInputNumber(numberLocale, '-0,0001')).toBe('-0,0001');
    expect(getFormattedInputNumber(numberLocale, '   500000   ')).toBe('500\xa0000');
    expect(getFormattedInputNumber(numberLocale, '')).toBe(null);
    expect(getFormattedInputNumber(numberLocale, 'aaaaaaa')).toBe('0');
    expect(getFormattedInputNumber(numberLocale, null)).toBe(null);
  });
});
