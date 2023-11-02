import { ChangeEvent, useEffect, useId, useState } from 'react';

import { defaultTo, last } from 'ramda';
import { isNotNil, isNotNilOrEmpty } from 'ramda-adjunct';

import { getDecimalPlaces } from '../NumberInput/utils/getDecimalPlaces';
import { getFormattedInputNumber } from '../NumberInput/utils/getFormattedInputNumber';
import { getNumberFromString } from '../NumberInput/utils/getNumberFromString';
import { PlatformInputElement } from '../TextInput/components/PlatformInputElement';
import { PlatformInputWrapper } from '../TextInput/components/PlatformInputWrapper';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { CurrencyCodeType } from '../../../types/CurrencyCodes';
import { useCurrencySymbolFormatter } from '../../CurrencySymbolFormat/useCurrencySymbolFormatter';
import { useLocale } from '../../../hooks/useLocale';
import { Nullish } from '../../../types/Nullish';
import { formatCurrency } from '../../CurrencyFormat/formatCurrency';
import { isCurrency } from '../../../utils/isCurrency';
import { VStack } from '../../layout/VStack/VStack';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Label } from '../../Label/Label';
import { Text } from '../../Text/Text';
import { HStack } from '../../layout/HStack/HStack';
import { Show } from '../../Show/Show';
import { HelperText } from '../../HelperText/HelperText';
import { useUpdateCaret } from '../../../hooks/useUpdateCaret';

export interface CurrencyInputProps
  extends FormControlProps<number | null, HTMLInputElement, [string | null]>,
    TestIdProps {
  currency: CurrencyCodeType;
  min?: number;
  max?: number;
  /**
   * @about
   * The number of allowed decimal places
   */
  decimalPlaces?: number;
  isDisabled?: boolean;
  isRecommended?: boolean;
}

export function CurrencyInput(props: CurrencyInputProps) {
  const formatCurrencySymbol = useCurrencySymbolFormatter();

  const id = useId();

  const { localeConfig } = useLocale();
  const currencyLocale = localeConfig.currency;

  const [inputValue, setInputValue] = useState<string | Nullish>();
  const { inputRef, updateCaret } = useUpdateCaret(
    currencyLocale.thousandsSeparator
  );

  const currencySymbol = formatCurrencySymbol(props.currency);

  useEffect(() => {
    const valueAsNumber = getNumberFromString(currencyLocale, inputValue);

    if (isNotNil(inputValue) && valueAsNumber === props.value) return;

    // TODO: Remove Number casting - T20-24196
    const value = Number(props.value);

    setInputValue(
      isNotNilOrEmpty(props.value) ? formatCurrency(localeConfig, value) : null
    );

    // inputValue isn't in deps because it breaks negative numbers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyLocale, localeConfig, props.value]);

  const handleChange = (
    value: string | null,
    event?: ChangeEvent<HTMLInputElement>
  ) => {
    if (value && currencyLocale.decimalSeparator !== '.' && last(value) === '.')
      return;

    const valueAsNumber = getNumberFromString(currencyLocale, value);
    const decimalPlaces = getDecimalPlaces(
      currencyLocale.decimalSeparator,
      value
    );

    if (
      isNaN(valueAsNumber) ||
      (isNotNil(props.decimalPlaces) && decimalPlaces > props.decimalPlaces) ||
      valueAsNumber > Number.MAX_SAFE_INTEGER
    )
      return;

    const formattedValue = getFormattedInputNumber(currencyLocale, value);

    setInputValue(formattedValue);
    props.onChange?.(value ? valueAsNumber : null, event, formattedValue);

    updateCaret();
  };

  const isInvalid = props.isInvalid || !!props.errorMessage;
  const isSymbolAfter = currencyLocale.position === 'after';
  const isCurrencyValid = isCurrency(props.currency ?? '');

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
        <HStack spacing={2} width="100%">
          <Show when={isCurrencyValid && !isSymbolAfter}>
            <Text size="small" color="secondary">
              {currencySymbol}
            </Text>
          </Show>

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

          <Show when={isCurrencyValid && isSymbolAfter}>
            <Text size="small" color="secondary">
              {currencySymbol}
            </Text>
          </Show>
        </HStack>
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
