import {getIncrementedNumber} from '../getIncrementedNumber';

describe('getIncrementedNumber', () => {
  it('Should return min if number is null', () => {
    expect(getIncrementedNumber(null, 10, null)).toBe(10);
  });

  it('Should increment 0 if number is null and min is not defined', () => {
    expect(getIncrementedNumber(null, null, null)).toEqual(1);
  });

  it('Should increment number by default step', () => {
    expect(getIncrementedNumber(4, 0, 10)).toBe(5);
  });

  it('Should increment number by step', () => {
    expect(getIncrementedNumber(10, 0, 20, 5)).toBe(15);
  });

  it('Should return max if incremented number is greater', () => {
    expect(getIncrementedNumber(5, 0, 10, 7)).toBe(10);
  });

  it('Should increment number if it is of incorrect type', () => {
    // @ts-ignore
    expect(getIncrementedNumber('5', 0, 10)).toBe(6);
  });
});
