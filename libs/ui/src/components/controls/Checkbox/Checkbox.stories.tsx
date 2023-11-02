import {Space} from 'platform/foundation';

import {useState} from 'react';

import {Checkbox} from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export function Default() {
  const [isChecked, setIsChecked] = useState(false);

  return <Checkbox value={isChecked} onChange={setIsChecked} />;
}

export function WithHelperText() {
  const [isChecked, setIsChecked] = useState(false);

  return <Checkbox helperText="Helper text" value={isChecked} onChange={setIsChecked} />;
}

export function WithErrorMessage() {
  const [isChecked, setIsChecked] = useState(false);

  return <Checkbox errorMessage="Error message" value={isChecked} onChange={setIsChecked} />;
}

export function Invalid() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Checkbox isInvalid value={isChecked} onChange={setIsChecked} label="Classic" />
      <Space vertical={4} />
      <Checkbox
        isInvalid
        value={isChecked}
        onChange={setIsChecked}
        label="Indeterminate"
        isIndeterminate
      />
    </>
  );
}

export function WithLabel() {
  const [isChecked, setIsChecked] = useState(false);

  return <Checkbox value={isChecked} onChange={setIsChecked} label="Label text" />;
}

export function Disabled() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <Checkbox value={isChecked} onChange={setIsChecked} label="Classic - disabled" isDisabled />
      <Space vertical={4} />
      <Checkbox
        value={isChecked}
        onChange={setIsChecked}
        label="Indeterminate - disabled"
        isIndeterminate
        isDisabled
      />
    </>
  );
}

export function Indeterminate() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Checkbox value={isChecked} onChange={setIsChecked} label="Indeterminate" isIndeterminate />
  );
}
