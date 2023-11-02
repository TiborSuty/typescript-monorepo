import { FieldValues, useFormState } from 'react-hook-form';

import { FormControl } from '../Form/types';
import { Button, ButtonProps } from '../../Button/Button';

export interface FormButtonProps<TFieldValues extends FieldValues = FieldValues>
  extends ButtonProps {
  control: FormControl<TFieldValues>;
}

export function FormButton<TFieldValues extends FieldValues = FieldValues>(
  props: FormButtonProps<TFieldValues>
) {
  const { control, ...buttonProps } = props;
  const { isSubmitting } = useFormState<TFieldValues>({ control });

  return (
    <Button
      {...buttonProps}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading || isSubmitting}
      form={control.formId}
    />
  );
}

/**
 * @about Use FormButton component to compose RHF forms
 */
