import {useState} from 'react';

import {Switch} from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export function Default() {
  const [value, setValue] = useState<boolean>(false);

  return <Switch value={value} onChange={setValue} />;
}

export function WithLabel() {
  const [value, setValue] = useState<boolean>(false);

  return <Switch label="Label text" value={value} onChange={setValue} />;
}

export function WithHelperText() {
  return <Switch helperText="Helper text" label="Label text" value={true} />;
}

export function WithErrorMessage() {
  return <Switch errorMessage="Error message" label="Label text" value={true} />;
}

export function Invalid() {
  return <Switch isInvalid label="Label text" value={true} />;
}
