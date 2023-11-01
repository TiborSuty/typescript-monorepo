import { ChangeEvent, FocusEventHandler } from 'react';
import { Nullish } from './Nullish';

export interface FormControlProps<
  ValueType,
  ElementType = HTMLInputElement,
  RestParams extends unknown[] = []
> {
  value: ValueType;
  onChange?: (
    value: ValueType,
    event?: ChangeEvent<ElementType>,
    ...args: RestParams
  ) => void;
  onBlur?: FocusEventHandler<ElementType>;
  onFocus?: FocusEventHandler<ElementType>;
  name?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  label?: string | Nullish;
  tooltip?: string | Nullish;
  errorMessage?: string;
  helperText?: string;
}

export type OptionType<ValueType = string, LabelType = string> = {
  value: ValueType;
  label: LabelType;
};
