import {getNumberFromString} from '../utils/getNumberFromString';

describe('getNumberFromString', () => {
  const numberLocale = {
    decimalSeparator: ',',
    thousandsSeparator: ' ',
  };

  it('Should return correct number from string representation', () => {
    expect(getNumberFromString(numberLocale, '500')).toBe(500);
    expect(getNumberFromString(numberLocale, '5 000')).toBe(5000);
    expect(getNumberFromString(numberLocale, '50 000')).toBe(50000);
    expect(getNumberFromString(numberLocale, '500 000')).toBe(500000);
    expect(getNumberFromString(numberLocale, '5 000 000')).toBe(5000000);
    expect(getNumberFromString(numberLocale, '5 000,5000')).toBe(5000.5);

    expect(getNumberFromString(numberLocale, 'aaaaaaaaa')).toBe(NaN);
    expect(getNumberFromString(numberLocale, null)).toBe(0);
  });
});
