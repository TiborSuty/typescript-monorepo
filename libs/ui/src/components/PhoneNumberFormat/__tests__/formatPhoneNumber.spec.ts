import {formatPhoneNumber} from '../formatPhoneNumber';

describe('formatNumber', () => {
  it('should return formatted phone number', () => {
    expect(formatPhoneNumber('+420723123456')).toEqual('+420 723 123 456');
    expect(formatPhoneNumber('+1(213)373-4253')).toEqual('+1 213 373 4253');
  });

  it('should filter out unsupported default countries', () => {
    // @ts-expect-error Using invalid argument for testing purposes
    expect(formatPhoneNumber('+420723123456', 'not-a-country-code')).toEqual('+420 723 123 456');
  });

  it('fills out national prefix when defaultCountry is specified', () => {
    expect(formatPhoneNumber('723123456', 'CZ')).toEqual('+420 723 123 456');
    expect(formatPhoneNumber('(213) 373-4253', 'US')).toEqual('+1 213 373 4253');
  });

  it('handles nullish values', () => {
    expect(formatPhoneNumber('')).toBeNull();
    expect(formatPhoneNumber(null)).toBeNull();
    expect(formatPhoneNumber(undefined)).toBeNull();
  });

  it('returns raw input when the number cant be formatted', () => {
    expect(formatPhoneNumber('not-a-number')).toBe('not-a-number');
    expect(formatPhoneNumber('723123456')).toEqual('723123456');
    expect(formatPhoneNumber('(213)373-4253')).toEqual('(213)373-4253');
  });
});
