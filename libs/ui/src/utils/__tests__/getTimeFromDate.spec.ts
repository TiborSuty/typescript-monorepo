import {parseDate} from 'shared';

import {getTimeFromDate} from '../getTimeFromDate';

describe('getTimeFromDate', () => {
  it('should return correct time', () => {
    expect(getTimeFromDate(parseDate('2020/01/30'))).toBe('00:00');
    expect(getTimeFromDate(parseDate('2020-01-30'))).toBe('00:00');
    expect(getTimeFromDate(parseDate('January 30, 2020 00:00:00'))).toBe('00:00');
    expect(getTimeFromDate(parseDate('January 30, 2020 00:00:30'))).toBe('00:00');
    expect(getTimeFromDate(parseDate('January 30, 2020 01:02:03'))).toBe('01:02');
    expect(getTimeFromDate(parseDate('January 30, 2020 23:59:59'))).toBe('23:59');
  });

  it('throw error when date is not valid', () => {
    expect(() => getTimeFromDate(parseDate('January 30, 2020 99:99:99'))).toThrow();
  });
});
