import {LocaleConfig, defaultLocaleConfigs} from 'platform/locale';

import {getDateFromStringInput} from '../utils/getDateFromStringInput';

describe('getDateFromStringInput', () => {
  it('should return null if the input empty', () => {
    expect(getDateFromStringInput(null, defaultLocaleConfigs.cs, 'cs')).toBeNull();
    expect(getDateFromStringInput(undefined, defaultLocaleConfigs.cs, 'cs')).toBeNull();
    expect(getDateFromStringInput('', defaultLocaleConfigs.cs, 'cs')).toBeNull();
  });

  it('should return null if the input is not a date', () => {
    expect(getDateFromStringInput('not-date', defaultLocaleConfigs.cs, 'cs')).toBeNull();
    expect(getDateFromStringInput('not-date', defaultLocaleConfigs.en, 'en')).toBeNull();
  });

  it('should return null if the input cant be parsed', () => {
    expect(getDateFromStringInput('123/456/2020', defaultLocaleConfigs.cs, 'cs')).toBeNull();
    expect(getDateFromStringInput('123/456/2020', defaultLocaleConfigs.en, 'en')).toBeNull();
    expect(getDateFromStringInput('1. 5. 2020', defaultLocaleConfigs.en, 'en')).toBeNull();
  });

  it('should not parse formats outside current locale config', () => {
    expect(getDateFromStringInput('1. 5. 2020', defaultLocaleConfigs.en, 'en')).toBeNull();
    expect(getDateFromStringInput('1/1/2020', defaultLocaleConfigs.cs, 'cs')).toBeNull();
  });

  it('should handle custom formats', () => {
    expect(
      getDateFromStringInput(
        '24% 12% 2020---',
        {
          dateTimeFormat: {dateShort: 'd% M% yyyy---'},
        } as LocaleConfig,
        'cs'
      )
    ).toEqual(new Date(2020, 11, 24));
  });

  it('should parse a date with locale format', () => {
    expect(getDateFromStringInput('24. 12. 2020', defaultLocaleConfigs.cs, 'cs')).toEqual(
      new Date(2020, 11, 24)
    );
    expect(getDateFromStringInput('1. 6. 2020', defaultLocaleConfigs.cs, 'cs')).toEqual(
      new Date(2020, 5, 1)
    );

    expect(getDateFromStringInput('01. 06. 2020', defaultLocaleConfigs.cs, 'cs')).toEqual(
      new Date(2020, 5, 1)
    );

    expect(getDateFromStringInput('12/24/2020', defaultLocaleConfigs.en, 'en')).toEqual(
      new Date(2020, 11, 24)
    );

    expect(getDateFromStringInput('06/01/2020', defaultLocaleConfigs.en, 'en')).toEqual(
      new Date(2020, 5, 1)
    );

    expect(getDateFromStringInput('6/1/2020', defaultLocaleConfigs.en, 'en')).toEqual(
      new Date(2020, 5, 1)
    );
  });

  it('should handle whitespace in input', () => {
    expect(getDateFromStringInput('24.12.2020', defaultLocaleConfigs.cs, 'cs')).toEqual(
      new Date(2020, 11, 24)
    );
    expect(getDateFromStringInput('24. 12.    2020', defaultLocaleConfigs.cs, 'cs')).toEqual(
      new Date(2020, 11, 24)
    );
    expect(getDateFromStringInput('12 / 24 / 2020', defaultLocaleConfigs.en, 'en')).toEqual(
      new Date(2020, 11, 24)
    );
    expect(getDateFromStringInput('12/ 24 /2020', defaultLocaleConfigs.en, 'en')).toEqual(
      new Date(2020, 11, 24)
    );
  });

  it('should handle whitespace in format', () => {
    expect(
      getDateFromStringInput(
        '24.12.2020',
        {
          language: 'cs',
          dateTimeFormat: {dateShort: 'd. M.   yyyy'},
        } as LocaleConfig,
        'cs'
      )
    ).toEqual(new Date(2020, 11, 24));

    expect(
      getDateFromStringInput(
        '12/24/2020',
        {
          language: 'cs',
          dateTimeFormat: {dateShort: 'M / d /   yyyy'},
        } as LocaleConfig,
        'cs'
      )
    ).toEqual(new Date(2020, 11, 24));
  });

  it('should use default locale format as a fallback', () => {
    expect(
      getDateFromStringInput(
        '24. 12. 2020',
        {
          language: 'cs',
          dateTimeFormat: {dateShort: 'not-a-format'},
        } as LocaleConfig,
        'cs'
      )
    ).toEqual(new Date(2020, 11, 24));
  });

  it('should handle format RangeErrors', () => {
    expect(
      getDateFromStringInput(
        '23 AM',
        {
          dateTimeFormat: {dateShort: 'HH a'},
        } as LocaleConfig,
        'cs'
      )
    ).toEqual(null);
  });
});
