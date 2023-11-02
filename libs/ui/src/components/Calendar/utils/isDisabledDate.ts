import {getDay, isAfter, isBefore, isSameDay} from 'date-fns';

import {DisabledDate} from '../types';

interface Props {
  minDate?: Date;
  maxDate?: Date;
  /** disabled days of week, 0 = Sunday */
  disabledWeekdays?: Day[];
  disabledDates?: DisabledDate[];
}

function isDisabledByDisabledDate(date: Date, disabledDate: DisabledDate) {
  if (Array.isArray(disabledDate)) {
    return (
      (isSameDay(date, disabledDate[0]) || isAfter(date, disabledDate[0])) &&
      (isSameDay(date, disabledDate[1]) || isBefore(date, disabledDate[1]))
    );
  }

  return isSameDay(date, disabledDate);
}

export function isDisabledDate(date: Date, props: Props) {
  return (
    (props.minDate && isBefore(date, props.minDate)) ||
    (props.maxDate && isAfter(date, props.maxDate)) ||
    props.disabledWeekdays?.includes(getDay(date)) ||
    props.disabledDates?.some((disabledDate) => isDisabledByDisabledDate(date, disabledDate))
  );
}
