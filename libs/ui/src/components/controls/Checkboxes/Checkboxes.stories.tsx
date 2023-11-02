import {useState} from 'react';

import {Checkboxes} from './Checkboxes';

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
};

export function Default() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function WithHelperText() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        helperText="Helper text"
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function WithErrorMessage() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        errorMessage="Error message"
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function Invalid() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        isInvalid
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function WithLabel() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        label="Label text"
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function WithLabelAndTooltip() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        label="Label text"
        tooltip="Tooltip text"
        value={multiple}
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function Vertical() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        value={multiple}
        direction="vertical"
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}

export function VerticalWithLabel() {
  const [multiple, setMultiple] = useState<string[] | null>([]);

  return (
    <>
      <Checkboxes
        label="Label text"
        value={multiple}
        direction="vertical"
        onChange={setMultiple}
        options={[
          {label: 'Multiple 1', value: 'multiple-1'},
          {label: 'Multiple 2', value: 'multiple-2'},
          {label: 'Multiple 3', value: 'multiple-3'},
        ]}
      />
    </>
  );
}
