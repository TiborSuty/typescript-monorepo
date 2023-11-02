import { FunctionComponent } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { Chips } from '../Chip/Chips';
import { CurrencyInput } from '../CurrencyInput/CurrencyInput';
import { IntegerInput } from '../IntegerInput/IntegerInput';
import { NumberInput } from '../NumberInput/NumberInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { Switch } from '../Switch/Switch';
import { TextInput } from '../TextInput/TextInput';
import { FormFieldType } from './types';

export function getControlByType(type: FormFieldType) {
  return controls[type];
}

export const controls: { [key in FormFieldType]: FunctionComponent<any> } = {
  text: TextInput,
  number: NumberInput,
  currency: CurrencyInput,
  integer: IntegerInput,
  password: PasswordInput,
  switch: Switch,
  checkbox: Checkbox,
  checkboxes: Checkboxes,
  chips: Chips,
};
