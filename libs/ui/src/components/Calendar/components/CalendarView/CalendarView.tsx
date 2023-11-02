import {Grid, VStack} from 'platform/foundation';
import {DayOfWeek, useLocale} from 'platform/locale';
import {match} from 'ts-pattern';

import {always} from 'ramda';

import {suffixTestId, TestIdProps} from 'shared';

import {FormControlProps} from '../../../../types/FormControlProps';
import {DisabledDate, CalendarFormValue} from '../../types';
import {getMemoizedStartOfWeeksInMonth} from '../../utils/getMemoizedStartOfWeeksInMonth';
import {Header} from './Header';
import {Week} from './Week';

interface CalendarViewProps extends FormControlProps<CalendarFormValue>, TestIdProps {
  activeMonth: Date;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: DisabledDate[];
  /** disabled days of week, 0 = Sunday */
  disabledWeekdays?: Day[];
  isRange?: boolean;
  isSixWeeksForced?: boolean;
  hoveredDate?: Date | null;
  onHoverDate?: (date: Date) => void;
}

export function CalendarView(props: CalendarViewProps) {
  const {localeConfig} = useLocale();

  const startOfWeek = match<DayOfWeek, Day>(localeConfig.calendar.firstDayOfTheWeek)
    .with(DayOfWeek.MONDAY, always(1))
    .with(DayOfWeek.TUESDAY, always(2))
    .with(DayOfWeek.WEDNESDAY, always(3))
    .with(DayOfWeek.THURSDAY, always(4))
    .with(DayOfWeek.FRIDAY, always(5))
    .with(DayOfWeek.SATURDAY, always(6))
    .with(DayOfWeek.SUNDAY, always(0))
    .otherwise(always(1));

  const weeks = getMemoizedStartOfWeeksInMonth(
    props.activeMonth,
    startOfWeek,
    props.isSixWeeksForced
  );

  return (
    <VStack>
      <Header startDate={weeks[0]} />
      <Grid columns={7} spacing={2} data-testid={suffixTestId('daysGrid', props)}>
        {weeks.map((startDate) => (
          <Week
            value={props.value}
            onChange={props.onChange}
            key={startDate.toISOString()}
            startDate={startDate}
            activeMonth={props.activeMonth}
            minDate={props.minDate}
            maxDate={props.maxDate}
            disabledWeekdays={props.disabledWeekdays}
            disabledDates={props.disabledDates}
            hoveredDate={props.hoveredDate}
            onHoverDate={props.onHoverDate}
            isRange={props.isRange}
          />
        ))}
      </Grid>
    </VStack>
  );
}
