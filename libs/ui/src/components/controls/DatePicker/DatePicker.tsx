import { isSameMonth, startOfMonth } from 'date-fns';

import { useState, ClipboardEvent, FocusEvent } from 'react';

import { isEmpty } from 'ramda';

import { DatePickerRelativeDates } from './components/DatePickerRelativeDates';
import { RelativeDate } from './RelativeDate';
import { getDateFromStringInput } from './utils/getDateFromStringInput';
import { getDefaultRelativeDates } from './utils/getDefaultRelativeDates';
import { getInitialActiveMonth } from './utils/getInitialActiveMonth';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { CalendarFormValue, DisabledDate } from '../../Calendar/types';
import { useLocale } from '../../../hooks/useLocale';
import { useDateTimeFormatter } from '../../DateTimeFormat/useDateTimeFormatter';
import { Placement } from '../../../types/Placement';
import { useBoolean } from '../../../hooks/useBoolean';
import { isDisabledDate } from '../../Calendar/utils/isDisabledDate';
import { TextInput } from '../TextInput/TextInput';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Box } from '../../layout/Box/Box';
import { HStack } from '../../layout/HStack/HStack';
import { Hide } from '../../Hide/Hide';
import { VStack } from '../../layout/VStack/VStack';
import { Separator } from '../../layout/Separator/Separator';
import { CalendarControl } from '../../Calendar/components/CalendarControl/CalendarControl';
import { CalendarView } from '../../Calendar/components/CalendarView/CalendarView';
import { useTranslationContext } from '../../providers/TranslationProvider/TranslationProvider';

export interface DatePickerProps
  extends FormControlProps<Date | null>,
    TestIdProps {
  disabledWeekdays?: Day[];
  disabledDates?: DisabledDate[];
  minDate?: Date;
  maxDate?: Date;
  placement?: Placement;
  relativeDates?: RelativeDate[];
  isRelativeDatesHidden?: boolean;
  isRecommended?: boolean;
  placeholder?: string;
}

export function DatePicker(props: DatePickerProps) {
  const { localeConfig, language } = useLocale();
  const formatDate = useDateTimeFormatter();

  const t = useTranslationContext();
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isFocused, focusInput, blurInput] = useBoolean();

  const { popperProps, Popper, openPopper, closePopper, referenceRef, isOpen } =
    useAnimatedPopper({
      gutter: 4,
      placement: props.placement ?? 'bottom-start',
    });

  const formattedValue = props.value
    ? formatDate('dateShort', props.value)
    : '';
  const placeholder =
    props.placeholder ?? props.isDisabled ? null : t('general.labels.select');

  const [activeMonth, setActiveMonth] = useState(() =>
    getInitialActiveMonth(props.value, props.minDate, props.maxDate)
  );

  const onOpen = () => {
    if (props.isDisabled) return;
    openPopper();
    if (props.value && !isSameMonth(activeMonth, props.value)) {
      setActiveMonth(startOfMonth(props.value ?? new Date()));
    }
  };

  const onChange = (value: CalendarFormValue) => {
    if (Array.isArray(value)) return;

    closePopper();
    props.onChange?.(value);
    setInputValue(null);
  };

  const relativeDates =
    isOpen && !props.isRelativeDatesHidden
      ? props.relativeDates ?? getDefaultRelativeDates(t)
      : [];

  const enabledRelativeDates = relativeDates.filter(
    (relativeDate) => !isDisabledDate(relativeDate.date, props)
  );

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData?.getData('text/plain');
    const parsedDate = getDateFromStringInput(
      pastedText,
      localeConfig,
      language
    );

    if (parsedDate) {
      event.target instanceof HTMLInputElement && event.target.blur();
      event.preventDefault();
      props.onChange?.(parsedDate);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    blurInput();
    const inputValue = event.target.value;
    const isInputChanged = inputValue !== formattedValue;
    const parsedDate = getDateFromStringInput(
      inputValue,
      localeConfig,
      language
    );

    if (isInputChanged) {
      props.onChange?.(parsedDate);
      closePopper();
      setInputValue(null);
    }

    props.onBlur?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    focusInput();
    setInputValue(formattedValue);
    props.onFocus?.(event);
  };

  return (
    <div>
      <div ref={referenceRef} onPaste={handlePaste}>
        <TextInput
          onClick={onOpen}
          onBlur={handleBlur}
          onFocus={handleFocus}
          leftIcon="action/date_range"
          value={isFocused ? inputValue : formattedValue}
          onChange={setInputValue}
          label={props.label}
          tooltip={props.tooltip}
          isInvalid={props.isInvalid}
          isRequired={props.isRequired}
          isDisabled={props.isDisabled}
          errorMessage={props.errorMessage}
          helperText={props.helperText}
          placeholder={placeholder}
          autoComplete="off"
          isRecommended={props.isRecommended}
          data-testid={suffixTestId('input', props)}
        />
      </div>
      <Popper {...popperProps}>
        <Box
          borderRadius="border_radius_3"
          boxShadow="elevation_2"
          border="1px solid"
          borderColor="palettes.neutral.40.100"
          backgroundColor="general.white"
        >
          <HStack>
            <Hide when={isEmpty(enabledRelativeDates)}>
              <Box padding={4}>
                <DatePickerRelativeDates
                  relativeDates={enabledRelativeDates}
                  onChange={onChange}
                  value={props.value}
                  data-testid={props['data-testid']}
                />
              </Box>
              <Separator orientation="vertical" spacing={0} />
            </Hide>
            <VStack grow={1} width={80}>
              <Box padding={4}>
                <CalendarControl
                  activeMonth={activeMonth}
                  onChangeActiveMonth={setActiveMonth}
                  minDate={props.minDate}
                  maxDate={props.maxDate}
                  data-testid={props['data-testid']}
                />
              </Box>
              <Separator spacing={0} />
              <Box padding={4}>
                <CalendarView
                  activeMonth={activeMonth}
                  onChange={onChange}
                  value={props.value}
                  minDate={props.minDate}
                  maxDate={props.maxDate}
                  disabledWeekdays={props.disabledWeekdays}
                  disabledDates={props.disabledDates}
                  data-testid={props['data-testid']}
                />
              </Box>
            </VStack>
          </HStack>
        </Box>
      </Popper>
    </div>
  );
}
