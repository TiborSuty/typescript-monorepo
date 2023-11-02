import {isSameMonth, startOfMonth} from 'date-fns';
import {VStack} from 'platform/foundation';

import {useState} from 'react';

import {TestIdProps} from 'shared';

import {FormControlProps} from '../../types/FormControlProps';
import {Separator} from '../Separator/Separator';
import {CalendarControl} from './components/CalendarControl/CalendarControl';
import {CalendarView} from './components/CalendarView/CalendarView';
import {CalendarFormValue} from './types';

export interface CalendarProps extends FormControlProps<CalendarFormValue>, TestIdProps {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Array<Date | [Date, Date]>;
  /** disabled days of week, 0 = Sunday */
  disabledWeekdays?: Day[];
  isRange?: boolean;
  hoveredDate?: Date | null;
  onHoverDate?: (date: Date) => void;
}

export function Calendar(props: CalendarProps) {
  const [activeMonth, setActiveMonth] = useState(() =>
    startOfMonth((Array.isArray(props.value) ? props.value[0] : props.value) ?? new Date())
  );

  const onSelectDate = (date: CalendarFormValue) => {
    if (!Array.isArray(date) && date && !isSameMonth(date, activeMonth)) {
      setActiveMonth(startOfMonth(date));
    }
    props.onChange?.(date);
  };

  return (
    <VStack>
      <CalendarControl
        onChangeActiveMonth={setActiveMonth}
        activeMonth={activeMonth}
        minDate={props.minDate}
        maxDate={props.maxDate}
        data-testid={props['data-testid']}
      />
      <Separator />
      <CalendarView
        value={props.value}
        onChange={onSelectDate}
        activeMonth={activeMonth}
        minDate={props.minDate}
        maxDate={props.maxDate}
        disabledDates={props.disabledDates}
        disabledWeekdays={props.disabledWeekdays}
        hoveredDate={props.hoveredDate}
        onHoverDate={props.onHoverDate}
        isRange={props.isRange}
        data-testid={props['data-testid']}
      />
    </VStack>
  );
}
