import {useState} from 'react';

import {NumberInput} from './NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
};

export function Default() {
  const [value, setValue] = useState<number | null>(0);

  return <NumberInput value={value} onChange={setValue} />;
}

export function Disabled() {
  return <NumberInput value={0} isDisabled />;
}

export function WithHelperText() {
  return <NumberInput helperText="Helper text" value={0} isDisabled />;
}

export function WithErrorMessage() {
  return <NumberInput errorMessage="Error message" value={0} isDisabled />;
}

export function Invalid() {
  return <NumberInput isInvalid value={0} isDisabled />;
}

export function WithStepper() {
  const [value, setValue] = useState<number | null>(0);

  return <NumberInput value={value} onChange={setValue} isStepperVisible />;
}

export function WithSuffix() {
  const [value, setValue] = useState<number | null>(0);

  return <NumberInput value={value} onChange={setValue} suffix="cm" />;
}

export function Recommended() {
  const [value, setValue] = useState<number | null>(0);

  return <NumberInput value={value} onChange={setValue} label="Label text" isRecommended />;
}
