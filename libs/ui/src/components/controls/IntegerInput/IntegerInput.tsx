import { ChangeEvent, useEffect, useId, useState } from 'react';

import { defaultTo, isNil } from 'ramda';

import { PlatformInputElement } from '../TextInput/components/PlatformInputElement';
import { PlatformInputWrapper } from '../TextInput/components/PlatformInputWrapper';
import { getNumberFromString } from './utils/getNumberFromString';
import { Nullish } from '../../../types/Nullish';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { useFormatNumber } from '../../NumberFormat/useFormatNumber';
import { useLocale } from '../../../hooks/useLocale';
import { useUpdateCaret } from '../../../hooks/useUpdateCaret';
import { NEGATIVE_SIGN } from '../../../constants/numberConstants';
import { getIncrementedNumber } from '../../../utils/getIncrementedNumber';
import { getDecrementedNumber } from '../../../utils/getDecrementedNumber';
import { VStack } from '../../layout/VStack/VStack';
import { Label } from '../../Label/Label';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Show } from '../../Show/Show';
import { Text } from '../../Text/Text';
import { Space } from '../../layout/Space/Space';
import { IconButton } from '../../IconButton/IconButton';
import { HelperText } from '../../HelperText/HelperText';
import { replaceAlternativeNegativeSign } from '../../../utils/replaceAlternativeNegativeSign';

export type IntegerInputProps = {
  min?: number;
  max?: number;
  /**
   * @about
   * The step used to increment or decrement the value
   * @default 1
   */
  step?: number;
  isRecommended?: boolean;
} & (
  | {
      suffix?: string | Nullish;
      isStepperVisible?: never;
    }
  | {
      isStepperVisible?: boolean;
      suffix?: never;
    }
) &
  FormControlProps<number | null, HTMLInputElement, [string | null]> &
  TestIdProps;

export function IntegerInput(props: IntegerInputProps) {
  const id = useId();
  const formatNumber = useFormatNumber();
  const { localeConfig } = useLocale();
  const { inputRef, updateCaret } = useUpdateCaret(
    localeConfig.number.thousandsSeparator
  );

  const [inputValue, setInputValue] = useState<string | Nullish>();

  useEffect(
    () => setInputValue(formatNumber(props.value)),
    // formatNumber in deps causes unwanted re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.value]
  );

  const handleChange = (
    value: string | null,
    event?: ChangeEvent<HTMLInputElement>
  ) => {
    value = replaceAlternativeNegativeSign(value);

    if (value === NEGATIVE_SIGN || value === '0-')
      return setInputValue(NEGATIVE_SIGN);

    const valueAsNumber = getNumberFromString(value);

    if (isNaN(valueAsNumber)) return;

    props.onChange?.(
      value ? valueAsNumber : null,
      event,
      formatNumber(valueAsNumber)
    );
    updateCaret();
  };

  const handleIncrement = () => {
    const newValue = getIncrementedNumber(
      props.value,
      props.min,
      props.max,
      props.step
    );

    handleChange(String(newValue));
  };

  const handleDecrement = () => {
    const newValue = getDecrementedNumber(props.value, props.min, props.step);

    handleChange(String(newValue));
  };

  const isInvalid = props.isInvalid || !!props.errorMessage;

  return (
    <VStack>
      <Label
        id={id}
        isRequired={props.isRequired}
        tooltip={props.tooltip}
        isRecommended={props.isRecommended}
        data-testid={suffixTestId('label', props)}
      >
        {props.label}
      </Label>
      <PlatformInputWrapper
        isDisabled={props.isDisabled}
        isInvalid={isInvalid}
        isRecommended={props.isRecommended}
      >
        <PlatformInputElement
          {...props}
          ref={inputRef}
          id={id}
          value={defaultTo(null, inputValue)}
          onChange={handleChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          isInvalid={isInvalid}
          isDisabled={!!props.isDisabled}
          data-testid={suffixTestId('numberInput', props)}
        />
        <Show when={props.suffix && !props.isStepperVisible}>
          <Space horizontal={2} />
          <Text size="small" color="secondary">
            {props.suffix}
          </Text>
        </Show>
        <Show when={props.isStepperVisible && isNil(props.suffix)}>
          <Space horizontal={2} />
          <IconButton
            onClick={handleDecrement}
            size="small"
            icon="content/remove"
            isDisabled={props.isDisabled}
            data-testid={suffixTestId('numberButtonMinus', props)}
          />
          <Space horizontal={1} />
          <IconButton
            onClick={handleIncrement}
            size="small"
            icon="content/add"
            isDisabled={props.isDisabled}
            data-testid={suffixTestId('numberButtonPlus', props)}
          />
        </Show>
      </PlatformInputWrapper>
      <Show when={props.errorMessage ?? props.helperText}>
        <HelperText
          errorMessage={props.errorMessage}
          helperText={props.helperText}
          data-testid={suffixTestId('helper', props)}
        />
      </Show>
    </VStack>
  );
}
