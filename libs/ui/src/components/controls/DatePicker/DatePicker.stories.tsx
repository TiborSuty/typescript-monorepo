import {addDays, addYears, startOfMonth, startOfToday} from 'date-fns';
import {Box} from 'platform/foundation';

import {useState} from 'react';

import {storybookAction} from '../../utils/storybookAction';
import {DatePicker} from './DatePicker';
import {RelativeDate} from './RelativeDate';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export function Default() {
  const [value, onChange] = useState<Date | null>(null);
  return <DatePicker value={value} onChange={storybookAction('onChange', onChange)} />;
}

export function Placeholder() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      placeholder="Placeholder"
      value={value}
      onChange={storybookAction('onChange', onChange)}
    />
  );
}

export function Disabled() {
  return <DatePicker value={null} isDisabled />;
}

export function WithLabel() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker label="Label text" value={value} onChange={storybookAction('onChange', onChange)} />
  );
}

export function WithLabelAndTooltip() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      label="Label text"
      tooltip="Tooltip text"
      value={value}
      onChange={storybookAction('onChange', onChange)}
    />
  );
}

export function Invalid() {
  const [value, onChange] = useState<Date | null>(null);
  return <DatePicker isInvalid value={value} onChange={storybookAction('onChange', onChange)} />;
}

export function WithHelperText() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      helperText="Helper text"
      value={value}
      onChange={storybookAction('onChange', onChange)}
    />
  );
}

export function WithErrorMessage() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      errorMessage="Error message"
      value={value}
      onChange={storybookAction('onChange', onChange)}
    />
  );
}
export function HiddenRelativeDates() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      isRelativeDatesHidden
    />
  );
}

export function Placement() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <Box paddingTop={100}>
      <DatePicker
        value={value}
        onChange={storybookAction('onChange', onChange)}
        placement="top-end"
      />
    </Box>
  );
}

export function MinMaxDate() {
  const [value, onChange] = useState<Date | null>(null);
  const today = startOfToday();
  const maxDate = addDays(today, 45);
  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      minDate={today}
      maxDate={maxDate}
    />
  );
}

export function DisabledWeekdays() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      disabledWeekdays={[0, 6]}
    />
  );
}

export function DisabledDates() {
  const [value, onChange] = useState<Date | null>(null);
  const startOfMonthDate = startOfMonth(new Date());
  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      disabledDates={[
        startOfMonthDate,
        [addDays(startOfMonthDate, 10), addDays(startOfMonthDate, 20)],
      ]}
    />
  );
}

const today = startOfToday();
const RELATIVE_DATES: RelativeDate[] = [
  {label: 'Today', date: today},
  {label: 'Tomorrow', date: addDays(today, 1)},
  {label: 'Next week', date: addDays(today, 7)},
  {label: 'Next 30 days', date: addDays(today, 30)},
  {label: 'Next 60 days', date: addDays(today, 60)},
  {label: 'Next 90 days', date: addDays(today, 90)},
  {label: 'Next year', date: addYears(today, 1)},
];

export function RelativeDates() {
  const [value, onChange] = useState<Date | null>(null);

  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      relativeDates={RELATIVE_DATES}
    />
  );
}

export function Recommended() {
  const [value, onChange] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={storybookAction('onChange', onChange)}
      label="Label text"
      isRecommended
    />
  );
}
