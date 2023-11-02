import { createElement, useContext, useEffect } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { juxt, mergeLeft } from 'ramda';
import { noop } from 'ramda-adjunct';

import { FormErrorContext } from '../Form/FormErrorContext';
import { FormControl } from '../Form/types';
import { getControlByType } from './getControlByType';
import { ControlProps, FormFieldType } from './types';
import { TestIdProps } from '../../../types/TestIdProps';
import { suffixTestId } from '../../../utils/suffixTestId';
import { buildObject } from '../../../utils/buildObject';

export type FormFieldProps<
  TFieldValues extends FieldValues,
  FieldType extends FormFieldType
> = {
  control: FormControl<TFieldValues>;
  type: FieldType;
} & TestIdProps &
  ControlProps<TFieldValues, FieldType>;

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  FieldType extends FormFieldType = FormFieldType
>(props: FormFieldProps<TFieldValues, FieldType>) {
  const { name, type, control, ...controlProps } = props;

  const { field, fieldState, formState } = useController({ name, control });
  const sendError = useContext(FormErrorContext);

  const isDisabled = controlProps.isDisabled || formState.isSubmitting;
  const error = fieldState.error;
  const errorMessage = props.errorMessage || error?.message;
  const isInvalid = props.isInvalid || !!error;

  useEffect(() => void sendError?.(name, error), [name, error, sendError]);

  // Any is used because we cannot type onChange properly inside generic FormField
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = juxt<any[], unknown>([
    field.onChange,
    control.onChange ?? noop,
    props.onChange ?? noop,
  ]);

  // Any is used because we cannot type onBlur properly inside generic FormField
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBlur = juxt<any[], unknown>([field.onBlur, props.onBlur ?? noop]);

  const elementProps = mergeLeft(
    {
      'data-testid': suffixTestId('formField', props),
      ...controlProps,
      onBlur,
      isDisabled,
      errorMessage,
      isInvalid,
      onChange,
    },
    buildObject<typeof field>()
      .name(field.name)
      .ref(field.ref, type === 'textarea')
      .onBlur(field.onBlur)
      .onChange(field.onChange)
      .value(field.value)
      .build()
  );

  debugger;

  return createElement(getControlByType(type), elementProps);
}
