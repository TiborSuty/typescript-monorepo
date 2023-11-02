import {getDecrementedNumber} from '../getDecrementedNumber';

describe('getDecrementedNumber', () => {
  it('Should return min if number is null', () => {
    expect(getDecrementedNumber(null, 10)).toBe(10);
  });

  it('Should decrement 0 if number is null and min is not defined', () => {
    expect(getDecrementedNumber(null, null)).toEqual(-1);
  });

  it('Should decrement number by default step', () => {
    expect(getDecrementedNumber(5, 0)).toBe(4);
  });

  it('Should decrement number by step', () => {
    expect(getDecrementedNumber(12, 0, 5)).toBe(7);
  });

  it('Should return min if incremented number is less', () => {
    expect(getDecrementedNumber(5, 0, 10)).toBe(0);
  });

  it('Should decrement number if it is of incorrect type', () => {
    // @ts-ignore
    expect(getDecrementedNumber('5', 0)).toBe(4);
  });
});
