import {startOfMonth} from 'date-fns';

export function getInitialActiveMonth(value: Date | null, minDate?: Date, maxDate?: Date) {
  if (value) return startOfMonth(value);
  if (minDate) return startOfMonth(minDate);
  if (maxDate) return startOfMonth(maxDate);
  return startOfMonth(new Date());
}
