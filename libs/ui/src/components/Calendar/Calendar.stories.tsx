import {addDays, addMonths, startOfMonth} from 'date-fns';

import {useState} from 'react';

import {storybookAction} from '../../utils/storybookAction';
import {Calendar} from './Calendar';
import {CalendarFormValue} from './types';

export default {
  title: 'Components/Calendar',
  component: Calendar,
};

export function Default() {
  const [value, onChange] = useState<CalendarFormValue>(null);

  return <Calendar value={value} onChange={storybookAction('onChange', onChange)} />;
}

export function MinMaxDate() {
  const [value, onChange] = useState<CalendarFormValue>(null);
  const minDate = addDays(startOfMonth(new Date()), 15);

  return (
    <Calendar
      value={value}
      onChange={storybookAction('onChange', onChange)}
      minDate={minDate}
      maxDate={addMonths(minDate, 24)}
    />
  );
}

export function DisabledDays() {
  const [value, onChange] = useState<CalendarFormValue>(null);

  return (
    <Calendar
      value={value}
      onChange={storybookAction('onChange', onChange)}
      disabledWeekdays={[1, 3]}
    />
  );
}

export function DisabledDates() {
  const [value, onChange] = useState<CalendarFormValue>(null);
  const date = startOfMonth(new Date());
  const from = addDays(date, 10);
  const to = addDays(date, 20);

  return (
    <Calendar
      value={value}
      onChange={storybookAction('onChange', onChange)}
      disabledDates={[date, [from, to]]}
    />
  );
}

export function SelectRange() {
  const [value, onChange] = useState<CalendarFormValue>(null);
  const [hoveredDate, onHoverDate] = useState<Date | null>();

  return (
    <Calendar
      isRange
      value={value}
      onChange={onChange}
      hoveredDate={hoveredDate}
      onHoverDate={onHoverDate}
    />
  );
}
