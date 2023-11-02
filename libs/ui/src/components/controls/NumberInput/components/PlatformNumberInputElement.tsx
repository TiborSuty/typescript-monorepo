import { ChangeEvent, useEffect } from 'react';

import { last, isNil, defaultTo } from 'ramda';
import { isNotNaN, isNotNil, isNotNilOrEmpty } from 'ramda-adjunct';

import { PlatformInputElement } from '../../TextInput/components/PlatformInputElement';
import { getDecimalPlaces } from '../utils/getDecimalPlaces';
import { getFormattedInputNumber } from '../utils/getFormattedInputNumber';
import { getNumberFromString } from '../utils/getNumberFromString';
import { FormControlProps } from '../../../../types/FormControlProps';
import { TestIdProps } from '../../../../types/TestIdProps';
import { Nullish } from '../../../../types/Nullish';
import { useLocale } from '../../../../hooks/useLocale';
import { useUpdateCaret } from '../../../../hooks/useUpdateCaret';
import { formatNumber } from '../../../NumberFormat/formatNumber';
import {
  DECIMAL_DOT,
  NEGATIVE_SIGN,
} from '../../../../constants/numberConstants';
import { replaceAlternativeNegativeSign } from '../../../../utils/replaceAlternativeNegativeSign';

interface PlatformNumberInputElementProps
  extends FormControlProps<number | null, HTMLInputElement, [string | null]>,
    TestIdProps {
  min?: number;
  max?: number;
  /**
   * @about
   * The number of allowed decimal places
   */
  decimalPlaces?: number;
  id: string;
  inputValue: string | Nullish;
  setInputValue: (value: string | Nullish) => void;
  placeholder?: string;
}

export function PlatformNumberInputElement(
  props: PlatformNumberInputElementProps
) {
  const { localeConfig } = useLocale();
  const numberLocale = localeConfig.number;
  const { inputRef, updateCaret } = useUpdateCaret(
    numberLocale.thousandsSeparator
  );

  useEffect(() => {
    const valueAsNumber = getNumberFromString(numberLocale, props.inputValue);

    if (isNotNil(props.inputValue) && valueAsNumber === props.value) return;

    const value = Number(props.value);
    props.setInputValue(
      isNotNilOrEmpty(props.value) && isNotNaN(value)
        ? formatNumber(localeConfig, value)
        : null
    );

    // props object isn't in deps because it breaks negative numbers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localeConfig, numberLocale, props.value]);

  const handleChange = (
    value: string | null,
    event?: ChangeEvent<HTMLInputElement>
  ) => {
    if (
      value &&
      numberLocale.decimalSeparator !== DECIMAL_DOT &&
      last(value) === DECIMAL_DOT
    )
      return;

    value = replaceAlternativeNegativeSign(value);

    if (value === NEGATIVE_SIGN || value === '0-')
      return props.setInputValue(NEGATIVE_SIGN);

    const valueAsNumber = getNumberFromString(numberLocale, value);
    const decimalPlaces = getDecimalPlaces(
      numberLocale.decimalSeparator,
      value
    );

    if (
      isNaN(valueAsNumber) ||
      (!isNil(props.decimalPlaces) && decimalPlaces > props.decimalPlaces) ||
      valueAsNumber > Number.MAX_SAFE_INTEGER ||
      valueAsNumber < Number.MIN_SAFE_INTEGER
    )
      return;

    const formattedValue = getFormattedInputNumber(numberLocale, value);

    props.setInputValue(formattedValue);
    props.onChange?.(value ? valueAsNumber : null, event, formattedValue);
    updateCaret();
  };

  const isInvalid = props.isInvalid || !!props.errorMessage;

  return (
    <PlatformInputElement
      {...props}
      ref={inputRef}
      id={props.id}
      value={defaultTo(null, props.inputValue)}
      onChange={handleChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      isInvalid={isInvalid}
      isDisabled={!!props.isDisabled}
      placeholder={props.placeholder}
      data-testid={props['data-testid']}
    />
  );
}
