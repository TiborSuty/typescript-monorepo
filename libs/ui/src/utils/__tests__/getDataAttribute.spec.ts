import {getDataAttribute} from '../getDataAttribute';

describe('getDataAttribute', () => {
  it('Should return stringified boolean values', () => {
    expect(getDataAttribute(true)).toBe('true');
    expect(getDataAttribute(false)).toBe('false');
  });

  it('Should return undefined if condition is undefined', () => {
    expect(getDataAttribute(undefined)).toBe(undefined);
  });

  it('Should return undefined if condition is null', () => {
    expect(getDataAttribute(null)).toBe(undefined);
  });
});
