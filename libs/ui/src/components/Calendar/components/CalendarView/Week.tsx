import {addDays, isBefore} from 'date-fns';

import {range} from 'ramda';

import {FormControlProps} from '../../../../types/FormControlProps';
import {CalendarFormValue, DisabledDate} from '../../types';
import {isBetweenDates} from '../../utils/isBetweenDates';
import {isDisabledDate} from '../../utils/isDisabledDate';
import {Day} from './Day';

interface WeekProps extends FormControlProps<CalendarFormValue> {
  activeMonth: Date;
  startDate: Date;
  isRange?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: DisabledDate[];
  /** disabled days of week, 0 = Sunday */
  disabledWeekdays?: Day[];
  hoveredDate?: Date | null;
  onHoverDate?: (date: Date) => void;
}

export function Week(props: WeekProps) {
  const onSelectDate = (date: Date) => {
    if (!props.isRange) {
      props.onChange?.(date);
      return;
    }

    const startDate = props.isRange && Array.isArray(props.value) ? props.value?.[0] : null;
    const endDate = props.isRange && Array.isArray(props.value) ? props.value?.[1] : null;

    if (startDate && !endDate) {
      if (isBefore(date, startDate)) {
        props.onChange?.([date, startDate]);
        return;
      }

      props.onChange?.([startDate, date]);
      return;
    }

    props.onChange?.([date, null]);
  };

  return (
    <>
      {range(0, 7).map((i) => {
        const date = addDays(props.startDate, i);

        return (
          <Day
            key={i}
            date={date}
            selectedDate={props.value}
            onSelectDate={onSelectDate}
            activeMonth={props.activeMonth}
            isDisabled={isDisabledDate(date, props)}
            onHover={props.onHoverDate}
            isHovered={isBetweenDates(date, props.value, props.hoveredDate)}
          />
        );
      })}
    </>
  );
}
