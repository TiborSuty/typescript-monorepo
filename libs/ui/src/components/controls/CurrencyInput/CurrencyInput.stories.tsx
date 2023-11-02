import {useState} from 'react';

import {CurrencyInput} from './CurrencyInput';

export default {
  title: 'Components/CurrencyInput',
  component: CurrencyInput,
};

export function Default() {
  const [value, setValue] = useState<number | null>(0);

  return <CurrencyInput value={value} onChange={setValue} currency="CZK" />;
}

export function Disabled() {
  return <CurrencyInput value={0} isDisabled currency="CZK" />;
}

export function WithHelperText() {
  return <CurrencyInput helperText="Helper text" value={0} isDisabled currency="CZK" />;
}

export function WithErrorMessage() {
  return <CurrencyInput errorMessage="Error message" value={0} isDisabled currency="USD" />;
}

export function Invalid() {
  return <CurrencyInput isInvalid value={0} isDisabled currency="EUR" />;
}

export function Recommended() {
  const [value, setValue] = useState<number | null>(0);

  return (
    <CurrencyInput
      value={value}
      onChange={setValue}
      currency="CZK"
      label="Label text"
      isRecommended
    />
  );
}
