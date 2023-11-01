import {Control, FieldValues, UseFormReset} from 'react-hook-form';

export type ValidationErrors = ValidationError[];
export type ValidationError = {
  name: string;
  message: string;
};

export type FormSubmitHandler<
  TFieldValues extends FieldValues = FieldValues,
  TPromiseReturn = unknown
> = (
  values: TFieldValues,
  setErrors: (errors: ValidationErrors | null) => void,
  reset: UseFormReset<TFieldValues>
) => Promise<TPromiseReturn>;

export type FormControl<TFieldValues extends FieldValues = FieldValues> = Control<TFieldValues> & {
  formId: string;
  onChange: VoidFunction;
};
