import { useId, useState } from 'react';

import { isNil, replace } from 'ramda';

import { PlatformInputWrapper } from '../TextInput/components/PlatformInputWrapper';
import { PlatformNumberInputElement } from './components/PlatformNumberInputElement';
import { getDecimalPlaces } from './utils/getDecimalPlaces';
import { Nullish } from '../../../types/Nullish';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { useLocale } from '../../../hooks/useLocale';
import { getIncrementedNumber } from '../../../utils/getIncrementedNumber';
import { DECIMAL_DOT } from '../../../constants/numberConstants';
import { VStack } from '../../layout/VStack/VStack';
import { Label } from '../../Label/Label';

import { Show } from '../../Show/Show';
import { Text } from '../../Text/Text';
import { Space } from '../../layout/Space/Space';
import { HelperText } from '../../HelperText/HelperText';
import { IconButton } from '../../IconButton/IconButton';
import { suffixTestId } from '../../../utils/suffixTestId';

export type NumberInputProps = {
  min?: number;
  max?: number;
  /**
   * @about
   * The number of allowed decimal places
   */
  decimalPlaces?: number;
  /**
   * @about
   * The step used to increment or decrement the value
   * @default 1
   */
  step?: number;
  isStepperVisible?: boolean;
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

export function NumberInput(props: NumberInputProps) {
  const { localeConfig } = useLocale();

  const id = useId();

  const numberLocale = localeConfig.number;

  const [inputValue, setInputValue] = useState<string | Nullish>();

  const handleIncrement = () => {
    const decimalPlaces = getDecimalPlaces(
      numberLocale.decimalSeparator,
      inputValue
    );
    const newValue = getIncrementedNumber(
      props.value,
      props.min,
      props.max,
      props.step
    ).toFixed(decimalPlaces);

    setInputValue(
      replace(DECIMAL_DOT, numberLocale.decimalSeparator, newValue)
    );
    props.onChange?.(parseFloat(newValue), undefined, String(newValue));
  };

  const handleDecrement = () => {
    const decimalPlaces = getDecimalPlaces(
      numberLocale.decimalSeparator,
      inputValue
    );
    const newValue = getIncrementedNumber(
      props.value,
      props.min,
      props.step
    ).toFixed(decimalPlaces);

    setInputValue(
      replace(DECIMAL_DOT, numberLocale.decimalSeparator, newValue)
    );
    props.onChange?.(parseFloat(newValue), undefined, String(newValue));
  };

  const isInvalid = props.isInvalid || !!props.errorMessage;

  return (
    <VStack>
      <Label
        id={id}
        isRequired={props.isRequired}
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
        <PlatformNumberInputElement
          {...props}
          id={id}
          isInvalid={isInvalid}
          inputValue={inputValue}
          setInputValue={setInputValue}
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
