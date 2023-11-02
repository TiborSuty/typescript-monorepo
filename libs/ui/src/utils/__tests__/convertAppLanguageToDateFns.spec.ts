import {convertAppLanguageToDateFns} from '../convertAppLanguageToDateFns';

describe('convertAppLanguageToDateFns', () => {
  it('returns correct locale', () => {
    expect(convertAppLanguageToDateFns('cs')).toHaveProperty('code', 'cs');
    expect(convertAppLanguageToDateFns('en')).toHaveProperty('code', 'en-US');
  });
});
