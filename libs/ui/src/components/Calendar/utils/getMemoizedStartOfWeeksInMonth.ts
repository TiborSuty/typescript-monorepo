import {
  startOfWeek,
  addWeeks,
  differenceInDays,
  format,
  getDaysInMonth,
  startOfMonth,
} from 'date-fns';

import {memoizeWith, range} from 'ramda';

function getStartOfWeeksInMonth(
  monthDate: Date,
  firstDayOfWeek: Day = 1,
  isSixWeeksForced = false
) {
  const startMonthDate = startOfMonth(monthDate);
  const firstDayOfFirsWeek = startOfWeek(startMonthDate, {weekStartsOn: firstDayOfWeek});

  const daysInMonth = getDaysInMonth(startMonthDate);
  const numberOfWeeks = isSixWeeksForced
    ? 6
    : Math.ceil((daysInMonth + differenceInDays(startMonthDate, firstDayOfFirsWeek)) / 7);

  return range(0, numberOfWeeks).map((i) => addWeeks(firstDayOfFirsWeek, i));
}

export const getMemoizedStartOfWeeksInMonth = memoizeWith(
  (monthDate, firstDayIsMonday) => `${format(monthDate, 'y-M-d')}-${firstDayIsMonday}`,
  getStartOfWeeksInMonth
);
