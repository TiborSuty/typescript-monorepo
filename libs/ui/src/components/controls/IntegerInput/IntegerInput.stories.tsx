import {useState} from 'react';

import {IntegerInput} from './IntegerInput';

export default {
  title: 'Components/IntegerInput',
  component: IntegerInput,
};

export function Default() {
  const [value, setValue] = useState<number | null>(0);

  return <IntegerInput value={value} onChange={setValue} />;
}

export function Disabled() {
  return <IntegerInput value={0} isDisabled />;
}

export function WithHelperText() {
  return <IntegerInput helperText="Helper text" value={0} isDisabled />;
}

export function WithLabel() {
  return <IntegerInput label="Label text" value={0} isDisabled />;
}

export function WithLabelAndTooltip() {
  return <IntegerInput label="Label text" tooltip="Tooltip text" value={0} isDisabled />;
}

export function WithErrorMessage() {
  return <IntegerInput errorMessage="Error message" value={0} isDisabled />;
}

export function Invalid() {
  return <IntegerInput isInvalid value={0} isDisabled />;
}

export function WithStepper() {
  const [value, setValue] = useState<number | null>(0);

  return <IntegerInput value={value} onChange={setValue} isStepperVisible />;
}

export function WithSuffix() {
  const [value, setValue] = useState<number | null>(0);

  return <IntegerInput value={value} onChange={setValue} suffix="km" />;
}

export function Recommended() {
  const [value, setValue] = useState<number | null>(0);

  return <IntegerInput value={value} onChange={setValue} label="Label text" isRecommended />;
}
