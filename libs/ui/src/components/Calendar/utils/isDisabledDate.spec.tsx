import {DisabledDate} from '../types';
import {isDisabledDate} from './isDisabledDate';

describe('isDisabledDate', () => {
  it('minDate', () => {
    const minDate = new Date(2020, 1, 5);
    expect(isDisabledDate(new Date(2020, 1, 4), {minDate})).toBeTruthy();
    expect(isDisabledDate(new Date(2020, 1, 5), {minDate})).toBeFalsy();
    expect(isDisabledDate(new Date(2021, 1, 1), {minDate})).toBeFalsy();
  });

  it('maxDate', () => {
    const maxDate = new Date(2020, 1, 5);
    expect(isDisabledDate(new Date(2020, 1, 4), {maxDate})).toBeFalsy();
    expect(isDisabledDate(new Date(2020, 1, 5), {maxDate})).toBeFalsy();
    expect(isDisabledDate(new Date(2020, 1, 6), {maxDate})).toBeTruthy();
  });

  it('disabledWeekdays', () => {
    const disabledWeekdays: Day[] = [1, 3]; // monday, wednesday
    expect(isDisabledDate(new Date(2022, 7, 1), {disabledWeekdays})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 7, 2), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 7, 3), {disabledWeekdays})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 7, 4), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 7, 5), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 7, 6), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 7, 7), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 7, 7), {disabledWeekdays})).toBeFalsy();

    expect(isDisabledDate(new Date(2023, 4, 1), {disabledWeekdays})).toBeTruthy();
    expect(isDisabledDate(new Date(2023, 4, 2), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2023, 4, 3), {disabledWeekdays})).toBeTruthy();
    expect(isDisabledDate(new Date(2023, 4, 4), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2023, 4, 5), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2023, 4, 6), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2023, 4, 7), {disabledWeekdays})).toBeFalsy();
    expect(isDisabledDate(new Date(2023, 4, 7), {disabledWeekdays})).toBeFalsy();
  });

  it('disabledDates', () => {
    const disabledDates: DisabledDate[] = [
      [new Date(2022, 6, 1), new Date(2022, 7, 31)],
      new Date(2022, 11, 24),
    ];

    expect(isDisabledDate(new Date(2022, 5, 29), {disabledDates})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 5, 30), {disabledDates})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 6, 1), {disabledDates})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 6, 2), {disabledDates})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 7, 30), {disabledDates})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 7, 31), {disabledDates})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 8, 1), {disabledDates})).toBeFalsy();

    expect(isDisabledDate(new Date(2022, 11, 23), {disabledDates})).toBeFalsy();
    expect(isDisabledDate(new Date(2022, 11, 24), {disabledDates})).toBeTruthy();
    expect(isDisabledDate(new Date(2022, 11, 25), {disabledDates})).toBeFalsy();
  });
});
