import {parseDate} from 'shared';

import {setTimeOnDate} from '../setTimeOnDate';

describe('setTimeOnDate', () => {
  it('should return correct date', () => {
    expect(setTimeOnDate(parseDate('January 30, 2020'), '00:00')).toEqual(
      parseDate('January 30, 2020 00:00:00')
    );
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), '00:00')).toEqual(
      parseDate('January 30, 2020 00:00:00')
    );
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), '12:34')).toEqual(
      parseDate('January 30, 2020 12:34:00')
    );
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), '23:59')).toEqual(
      parseDate('January 30, 2020 23:59:00')
    );
  });

  it('should ignore milliseconds', () => {
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:56'), '12:34')).toEqual(
      parseDate('January 30, 2020 12:34:56')
    );
    //@ts-expect-error Testing purposes
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), '12:34:56')).toEqual(
      parseDate('January 30, 2020 12:34:00')
    );
  });

  it('defaults to 00:00 when time is not valid', () => {
    //@ts-expect-error Testing purposes
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), '')).toEqual(
      parseDate('January 30, 2020 00:00:00')
    );
    //@ts-expect-error Testing purposes
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), ':')).toEqual(
      parseDate('January 30, 2020 00:00:00')
    );
    //@ts-expect-error Testing purposes
    expect(setTimeOnDate(parseDate('January 30, 2020 00:00:00'), 'abc')).toEqual(
      parseDate('January 30, 2020 00:00:00')
    );
  });

  it('trims time values greater than 23:59', () => {
    //@ts-expect-error Testing purposes
    expect(setTimeOnDate(parseDate('January 30, 2020'), '99:99')).toEqual(
      parseDate('January 30, 2020 23:59:00')
    );
  });

  it('throws error when date is not valid', () => {
    expect(() => setTimeOnDate(parseDate('January 30, 2020 99:99:99'), '00:00')).toThrow();
  });
});
