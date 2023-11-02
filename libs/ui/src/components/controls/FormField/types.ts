import {FieldPathByValue, FieldValues} from 'react-hook-form';

import {Nullish} from 'shared';

import {APIDatePickerProps} from '../APIDatePicker/APIDatePicker';
import {CheckboxProps} from '../Checkbox/Checkbox';
import {CheckboxesProps} from '../Checkboxes/Checkboxes';
import {ChipsProps} from '../Chip/Chips';
import {ChoiceProps} from '../Choice/Choice';
import {CreatableChoiceProps} from '../Choice/components/CreatableChoice';
import {CreatableMultiChoiceProps} from '../Choice/components/CreatableMultiChoice';
import {CurrencyInputProps} from '../CurrencyInput/CurrencyInput';
import {DatePickerProps} from '../DatePicker/DatePicker';
import {DayMonthPickerProps} from '../DayMonthPicker/DayMonthPicker';
import {EmailInputProps} from '../EmailInput/EmailInput';
import {IntegerInputProps} from '../IntegerInput/IntegerInput';
import {MentionsInputProps} from '../MentionsInput/MentionsInput';
import {MultiChoiceProps} from '../MultiChoice/MultiChoice';
import {NumberInputProps} from '../NumberInput/NumberInput';
import {NumberInputWithOptionsProps} from '../NumberInputWithOptions/NumberInputWithOptions';
import {PasswordInputProps} from '../PasswordInput/PasswordInput';
import {PhoneInputProps} from '../PhoneInput/PhoneInput';
import {RadioProps} from '../Radio/Radio';
import {SliderProps} from '../Slider/Slider';
import {SwitchProps} from '../Switch/Switch';
import {TextareaProps} from '../Textarea/Textarea';
import {TextInputProps} from '../TextInput/TextInput';
import {TimePickerProps} from '../TimePicker/TimePicker';
import {UploadImageProps} from '../UploadImage/UploadImage';

export type FormFieldType =
  | 'text'
  | 'number'
  | 'integer'
  | 'password'
  | 'phone'
  | 'switch'
  | 'radio'
  | 'textarea'
  | 'checkbox'
  | 'checkboxes'
  | 'chips'
  | 'choice'
  | 'creatableChoice'
  | 'date'
  | 'apiDate'
  | 'time'
  | 'email'
  | 'uploadImage'
  | 'currency'
  | 'slider'
  | 'numberInputWithOptions'
  | 'dayMonth'
  | 'multiChoice'
  | 'creatableMultiChoice'
  | 'mentionsInput';

/**
 * @deprecated
 * Using type assertion to allow input work with undesired value type is against style-of-code
 */
export type UnsafeFieldAssertionPath<T extends FieldValues, P> = FieldPathByValue<T, P | Nullish>;

type PropsWithTypedName<
  T,
  TFieldValues extends FieldValues,
  FieldType extends FormFieldType
> = Partial<T> & {
  name: FieldPathByValue<TFieldValues, NameTypes[FieldType] | Nullish>;
};

type NameTypes = {
  integer: number;
  slider: number;
  switch: boolean;
  checkbox: boolean;
  dayMonth: object;
  email: string;
  apiDate: string;
  [key: string]: any;
};

export type ControlProps<TFieldValues extends FieldValues, FieldType extends FormFieldType> = {
  text: PropsWithTypedName<TextInputProps, TFieldValues, FieldType>;
  number: PropsWithTypedName<NumberInputProps, TFieldValues, FieldType>;
  currency: PropsWithTypedName<CurrencyInputProps, TFieldValues, FieldType>;
  integer: PropsWithTypedName<IntegerInputProps, TFieldValues, FieldType>;
  password: PropsWithTypedName<PasswordInputProps, TFieldValues, FieldType>;
  phone: PropsWithTypedName<PhoneInputProps, TFieldValues, FieldType>;
  radio: PropsWithTypedName<RadioProps, TFieldValues, FieldType>;
  switch: PropsWithTypedName<SwitchProps, TFieldValues, FieldType>;
  textarea: PropsWithTypedName<TextareaProps, TFieldValues, FieldType>;
  checkbox: PropsWithTypedName<CheckboxProps, TFieldValues, FieldType>;
  checkboxes: PropsWithTypedName<CheckboxesProps, TFieldValues, FieldType>;
  chips: PropsWithTypedName<ChipsProps, TFieldValues, FieldType>;
  choice: PropsWithTypedName<ChoiceProps<string | number>, TFieldValues, FieldType>;
  multiChoice: PropsWithTypedName<MultiChoiceProps<string | number>, TFieldValues, FieldType>;
  date: PropsWithTypedName<DatePickerProps, TFieldValues, FieldType>;
  apiDate: PropsWithTypedName<APIDatePickerProps, TFieldValues, FieldType>;
  time: PropsWithTypedName<TimePickerProps, TFieldValues, FieldType>;
  email: PropsWithTypedName<EmailInputProps, TFieldValues, FieldType>;
  uploadImage: PropsWithTypedName<UploadImageProps, TFieldValues, FieldType>;
  slider: PropsWithTypedName<SliderProps, TFieldValues, FieldType>;
  numberInputWithOptions: PropsWithTypedName<NumberInputWithOptionsProps, TFieldValues, FieldType>;
  dayMonth: PropsWithTypedName<DayMonthPickerProps, TFieldValues, FieldType>;
  creatableChoice: PropsWithTypedName<
    CreatableChoiceProps<string | number>,
    TFieldValues,
    FieldType
  >;
  creatableMultiChoice: PropsWithTypedName<
    CreatableMultiChoiceProps<string | number>,
    TFieldValues,
    FieldType
  >;
  mentionsInput: PropsWithTypedName<MentionsInputProps, TFieldValues, FieldType>;
}[FieldType];
