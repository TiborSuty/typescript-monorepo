import {convertStringLocaleToDateFns} from '../convertStringLocaleToDateFns';

describe('convertStringLocaleToDateFns', () => {
  it('returns correct locale', () => {
    expect(convertStringLocaleToDateFns('cs')).toHaveProperty('code', 'cs');
    expect(convertStringLocaleToDateFns('en')).toHaveProperty('code', 'en-US');
  });
  it('defaults to english', () => {
    expect(convertStringLocaleToDateFns('not-a-locale')).toHaveProperty('code', 'en-US');
  });
  it('handles nullishvalues', () => {
    expect(convertStringLocaleToDateFns(null)).toHaveProperty('code', 'en-US');
    expect(convertStringLocaleToDateFns(undefined)).toHaveProperty('code', 'en-US');
  });
});
