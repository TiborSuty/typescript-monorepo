import { union, without, camelCase } from 'lodash';
import { CheckboxOption, CheckboxPropsBase } from '../Checkbox/types';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { VStack } from '../../layout/VStack/VStack';
import { Label } from '../../Label/Label';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Stack } from '../../layout/Stack/Stack';
import { Checkbox } from '../Checkbox/Checkbox';
import { Show } from '../../Show/Show';
import { HelperText } from '../../HelperText/HelperText';

export interface CheckboxesProps
  extends CheckboxPropsBase,
    FormControlProps<string[] | null>,
    TestIdProps {
  options: CheckboxOption[];
  direction?: 'horizontal' | 'vertical';
}

export function Checkboxes(props: CheckboxesProps) {
  const isInvalid = props.isInvalid || !!props.errorMessage;

  const handleChange = (selectedValue: string, isChecked: boolean) => {
    const nextValue = isChecked
      ? union(props.value, [selectedValue])
      : without(props.value, selectedValue);

    props.onChange?.(nextValue);
  };

  return (
    <VStack>
      <Label
        isRequired={props.isRequired}
        tooltip={props.tooltip}
        data-testid={suffixTestId('label', props)}
      >
        {props.label}
      </Label>
      <Stack
        direction={'vertical' === props.direction ? 'column' : 'row'}
        spacing={4}
      >
        {props.options.map(({ label, value, checkedIcon }) => (
          <Checkbox
            key={value}
            label={label}
            isInvalid={isInvalid}
            checkedIcon={checkedIcon ?? props.checkedIcon}
            value={!!props.value?.includes(value)}
            onChange={(isChecked) => handleChange(value, isChecked)}
            data-testid={suffixTestId(camelCase(label), props)}
          />
        ))}
      </Stack>
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
