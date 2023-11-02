import {getNumberFromString} from '../utils/getNumberFromString';

describe('getNumberFromString', () => {
  it('Should return correct number from string representation', () => {
    expect(getNumberFromString('500')).toBe(500);
    expect(getNumberFromString('5 000')).toBe(5000);
    expect(getNumberFromString('-5 000')).toBe(-5000);
    expect(getNumberFromString('50 000')).toBe(50000);
    expect(getNumberFromString('500 000')).toBe(500000);
    expect(getNumberFromString('5 000 000')).toBe(5000000);
    expect(getNumberFromString('5,000,000')).toBe(5000000);
    expect(getNumberFromString('5 000,5000')).toBe(50005000);
    expect(getNumberFromString('-5 000,5000')).toBe(-50005000);
    expect(getNumberFromString('aaaaaaaaa')).toBe(NaN);
    expect(getNumberFromString(null)).toBe(0);
  });
});
