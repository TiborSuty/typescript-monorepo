import {format, isAfter, isBefore, isSameMonth} from 'date-fns';
import {convertAppLanguageToDateFns, LocaleConfig} from 'platform/locale';

import {memoizeWith, range} from 'ramda';

import {Nullish, capitalize} from 'shared';

import {OptionType} from '../../../types/FormControlProps';

function getMonthChoiceOptions(
  activeYear: number,
  minDate: Date | Nullish,
  maxDate: Date | Nullish,
  localeConfig: LocaleConfig
): OptionType[] {
  const options: OptionType[] = [];

  range(0, 12).forEach((i) => {
    const date = new Date(activeYear, i, 1);

    const isDisabledByMinDate = minDate && isBefore(date, minDate) && !isSameMonth(date, minDate);
    const isDisabledMyMaxDate = maxDate && isAfter(date, maxDate) && !isSameMonth(date, maxDate);

    if (isDisabledByMinDate || isDisabledMyMaxDate) return;

    options.push({
      label: capitalize(
        format(date, 'LLLL', {
          locale: convertAppLanguageToDateFns(localeConfig.language),
        })
      ),
      value: `${i}`,
    });
  });

  return options;
}

export const getMemoizedMonthChoiceOptions = memoizeWith(
  (activeYear, minDate, maxDate, localeConfig) =>
    [
      activeYear,
      minDate ? format(minDate, 'y-M-d') : '',
      maxDate ? format(maxDate, 'y-M-d') : '',
      localeConfig,
    ].join('-'),
  getMonthChoiceOptions
);
