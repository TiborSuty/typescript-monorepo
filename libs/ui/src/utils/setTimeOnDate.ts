import {setHours, setMinutes} from 'date-fns';

import {clamp} from 'ramda';
import {isNaN, isNotValidDate} from 'ramda-adjunct';

import {TimeType} from '../types/TimeType';

export const setTimeOnDate = (date: Date, time: TimeType): Date => {
  if (isNotValidDate(date)) throw new Error('Invalid date');

  const [hour, minute] = time.split(':');
  const parsedHours = parseInt(hour) ?? 0;
  const parsedMinutes = parseInt(minute) ?? 0;

  const hours = clamp(0, MAX_HOURS_IN_DAY, isNaN(parsedHours) ? 0 : parsedHours);
  const minutes = clamp(0, MAX_MINUTES_IN_HOUR, isNaN(parsedMinutes) ? 0 : parsedMinutes);

  return setMinutes(setHours(date, hours), minutes);
};

const MAX_HOURS_IN_DAY = 23;
const MAX_MINUTES_IN_HOUR = 59;
