import {useState} from 'react';

import {TextInput} from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export function Default() {
  const [value, setValue] = useState<string | null>(null);

  return <TextInput onChange={setValue} value={value} placeholder="Placeholder" />;
}

export function WithHelperText() {
  return <TextInput value="Value" label="Label text" helperText="Helper text" />;
}

export function WithErrorMessage() {
  return <TextInput value="Value" label="Label text" errorMessage="Error message" />;
}

export function Invalid() {
  return <TextInput value="Value" label="Label text" isInvalid />;
}

export function WithLabel() {
  return <TextInput value="Value" label="Label text" />;
}

export function WithLabelAndCounter() {
  const [value, setValue] = useState<string | null>('Value');
  return (
    <TextInput
      onChange={setValue}
      value={value}
      label="Label text"
      maxLength={20}
      isCounterVisible
    />
  );
}

export function WithLabelAndTooltip() {
  return <TextInput value="Value" label="Label text" tooltip="Tooltip text" />;
}

export function WithLabelAndCounterAndTooltip() {
  const [value, setValue] = useState<string | null>('Value');
  return (
    <TextInput
      onChange={setValue}
      value={value}
      label="Label text"
      tooltip="Tooltip text"
      maxLength={20}
      isCounterVisible
    />
  );
}

export function WithValue() {
  const [value, setValue] = useState<string | null>('Input value');

  return <TextInput onChange={setValue} value={value} placeholder="Placeholder" />;
}

export function Disabled() {
  return <TextInput isDisabled value="Input value" placeholder="Placeholder" />;
}

export function LeftIcon() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <TextInput
      leftIcon="action/date_range"
      onChange={setValue}
      value={value}
      placeholder="Placeholder"
    />
  );
}

export function WithSuffix() {
  const [value, setValue] = useState<string | null>(null);

  return <TextInput onChange={setValue} value={value} placeholder="Placeholder" suffix="CZK" />;
}

export function MaxLength() {
  const [value, setValue] = useState<string | null>(null);

  return <TextInput maxLength={5} onChange={setValue} value={value} placeholder="Placeholder" />;
}

export function Recommended() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <TextInput
      onChange={setValue}
      value={value}
      label="Label text"
      placeholder="Placeholder"
      isRecommended
    />
  );
}
