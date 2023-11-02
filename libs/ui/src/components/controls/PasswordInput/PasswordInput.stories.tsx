import {useState} from 'react';

import {PasswordInput} from './PasswordInput';

export default {
  title: 'Components/Password',
  component: PasswordInput,
};

export function Default() {
  const [value, setValue] = useState<string | null>('1234');

  return <PasswordInput value={value} onChange={setValue} />;
}

export function WithLabel() {
  const [value, setValue] = useState<string | null>('1234');

  return <PasswordInput label="Label text" value={value} onChange={setValue} />;
}

export function WithLabelAndTooltip() {
  const [value, setValue] = useState<string | null>('1234');

  return (
    <PasswordInput label="Label text" tooltip="Tooltip text" value={value} onChange={setValue} />
  );
}

export function WithHelperText() {
  return <PasswordInput helperText="Helper text" label="Label text" value="12345" />;
}

export function WithErrorMessage() {
  return <PasswordInput errorMessage="Error message" label="Label text" value="12345" />;
}

export function Invalid() {
  return <PasswordInput isInvalid label="Label text" value="12345" />;
}

export function Recommended() {
  const [value, setValue] = useState<string | null>('1234');

  return <PasswordInput label="Label text" value={value} onChange={setValue} isRecommended />;
}
