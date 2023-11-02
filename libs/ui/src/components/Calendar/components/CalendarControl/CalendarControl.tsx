import {addMonths, getMonth, getYear, isAfter, isBefore, isSameMonth, startOfMonth} from 'date-fns';
import {Box, HStack} from 'platform/foundation';
import {useLocale} from 'platform/locale';

import {suffixTestId, TestIdProps} from 'shared';

import {Choice} from '../../../Choice/Choice';
import {IconButton} from '../../../IconButton/IconButton';
import {getMemoizedMonthChoiceOptions} from '../../utils/getMemoizedMonthChoiceOptions';
import {getMemoizedYearChoiceOptions} from '../../utils/getMemoizedYearChoiceOptions';

interface CalendarControlProps extends TestIdProps {
  activeMonth: Date;
  minDate?: Date;
  maxDate?: Date;
  onChangeActiveMonth: (date: Date) => void;
}

export function CalendarControl(props: CalendarControlProps) {
  const {localeConfig} = useLocale();

  const yearChoiceOptions = getMemoizedYearChoiceOptions(props.minDate, props.maxDate);
  const monthChoiceOptions = getMemoizedMonthChoiceOptions(
    props.activeMonth.getFullYear(),
    props.minDate,
    props.maxDate,
    localeConfig
  );

  const onMoveForward = () => props.onChangeActiveMonth(addMonths(props.activeMonth, 1));
  const canGoForward =
    !props.maxDate || isAfter(startOfMonth(props.maxDate), startOfMonth(props.activeMonth));

  const onMoveBackward = () => props.onChangeActiveMonth(addMonths(props.activeMonth, -1));
  const canGoBackward =
    !props.minDate || isBefore(startOfMonth(props.minDate), startOfMonth(props.activeMonth));

  const onChangeMonth = (value: string | number | string[] | null) => {
    if (typeof value !== 'string') return null;
    props.onChangeActiveMonth(new Date(props.activeMonth.getFullYear(), Number.parseInt(value), 1));
  };

  const onChangeYear = (value: string | number | string[] | null) => {
    if (typeof value !== 'string') return;
    const newActiveMonth = new Date(Number.parseInt(value), props.activeMonth.getMonth(), 1);

    if (
      props.minDate &&
      isBefore(newActiveMonth, props.minDate) &&
      !isSameMonth(newActiveMonth, props.minDate)
    ) {
      return props.onChangeActiveMonth(startOfMonth(props.minDate));
    }

    if (
      props.maxDate &&
      isAfter(newActiveMonth, props.maxDate) &&
      !isSameMonth(newActiveMonth, props.maxDate)
    ) {
      return props.onChangeActiveMonth(startOfMonth(props.maxDate));
    }

    props.onChangeActiveMonth(newActiveMonth);
  };

  return (
    <HStack spacing={2}>
      <IconButton
        priority="tertiary"
        icon="navigation/chevron_left"
        onClick={onMoveBackward}
        isDisabled={!canGoBackward}
        data-testid={suffixTestId('buttonPreviousMonth', props)}
      />
      <Box flexGrow={1} maxWidth={40}>
        <Choice
          value={`${getMonth(props.activeMonth)}`}
          options={monthChoiceOptions}
          onChange={onChangeMonth}
          isClearable={false}
          data-testid={suffixTestId('choiceMonth', props)}
        />
      </Box>
      <Box width={22}>
        <Choice
          value={`${getYear(props.activeMonth)}`}
          options={yearChoiceOptions}
          onChange={onChangeYear}
          isClearable={false}
          data-testid={suffixTestId('choiceYear', props)}
        />
      </Box>
      <IconButton
        priority="tertiary"
        icon="navigation/chevron_right"
        onClick={onMoveForward}
        isDisabled={!canGoForward}
        data-testid={suffixTestId('buttonNextMonth', props)}
      />
    </HStack>
  );
}
