import {isBefore, isWithinInterval} from 'date-fns';

import {CalendarFormValue} from '../types';

export function isBetweenDates(
  date: Date,
  formValue: CalendarFormValue,
  hoveredDate?: Date | null
): boolean {
  const start = Array.isArray(formValue) ? formValue[0] : null;
  const end = Array.isArray(formValue) ? formValue[1] ?? hoveredDate : null;

  if (!start || !end) {
    return false;
  }

  const isEndBeforeStart = isBefore(end, start);

  return isWithinInterval(date, isEndBeforeStart ? {start: end, end: start} : {start, end});
}
