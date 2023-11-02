import {parseDate} from 'shared';

import {DateTimeFormat} from './DateTimeFormat';

export default {
  title: 'Locale/DateTimeFormat',
  component: DateTimeFormat,
};

export function TimeShort() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="timeShort" />;
}

export function TimeMedium() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="timeMedium" />;
}

export function TimeLong() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="timeLong" />;
}

export function TimeFull() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="timeFull" />;
}

export function DateShort() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateShort" />;
}

export function DateMedium() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateMedium" />;
}

export function DateLong() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateLong" />;
}

export function DateFull() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateFull" />;
}

export function DateTimeShort() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateTimeShort" />;
}

export function DateTimeMedium() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateTimeMedium" />;
}

export function DateTimeLong() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateTimeLong" />;
}

export function DateTimeFull() {
  return <DateTimeFormat value={parseDate('2003-04-30T17:03:59')} format="dateTimeFull" />;
}
