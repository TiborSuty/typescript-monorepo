import {getYear, format} from 'date-fns';

import {memoizeWith, range} from 'ramda';

import {OptionType} from '../../../types/FormControlProps';

function getYearChoiceOptions(minDate: Date | undefined, maxDate: Date | undefined): OptionType[] {
  const today = new Date();
  const startYear = minDate ? getYear(minDate) : getYear(today) - 100;
  const endYear = maxDate ? getYear(maxDate) : getYear(today) + 50;

  return range(startYear, endYear + 1).map((i): OptionType => ({label: `${i}`, value: `${i}`}));
}

export const getMemoizedYearChoiceOptions = memoizeWith(
  (minDate, maxDate) =>
    `${minDate ? format(minDate, 'y-M-d') : ''}-${maxDate ? format(maxDate, 'y-M-d') : ''}`,
  getYearChoiceOptions
);
