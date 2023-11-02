import {VStack} from 'platform/foundation';

import {action} from '@storybook/addon-actions';

import {useState} from 'react';

import {storybookAction} from '../../utils/storybookAction';
import {Chips} from './Chips';
import {ChipsOption} from './ChipsOption';

export default {
  title: 'Components/Chips',
  component: Chips,
};

const options: ChipsOption[] = [
  {label: 'Chip 1', value: '1'},
  {label: 'Chip 2', value: '2'},
  {label: 'Chip 3', value: '3'},
  {label: 'Chip 4', value: '4'},
  {label: 'Chip 5', value: '5'},
];

export function Multiple() {
  const [value, setValue] = useState([]);
  return (
    <Chips
      onChange={storybookAction('onChange', setValue)}
      value={value}
      options={options}
      isMultiple
    />
  );
}

export function Limit() {
  return (
    <VStack spacing={4}>
      <Chips
        onChange={action('onChange')}
        value={['1', '2', '3', '4', '5']}
        limit={3}
        options={options}
      />
      <Chips
        size="small"
        onChange={action('onChange')}
        value={['1', '2', '3', '4', '5']}
        limit={3}
        options={options}
      />
    </VStack>
  );
}

export function Deselectable() {
  return <Chips onChange={action('onChange')} value={['2']} options={options} isDeselectable />;
}

export function Sizes() {
  return (
    <VStack spacing={2}>
      <Chips onChange={action('onChange')} value={['2']} options={options} size="small" />
      <Chips onChange={action('onChange')} value={['2']} options={options} />
    </VStack>
  );
}

export function Variants() {
  return (
    <VStack spacing={2}>
      <Chips onChange={action('onChange')} value={['2']} options={options} limit={3} />
      <Chips
        onChange={action('onChange')}
        value={['2']}
        options={options}
        limit={3}
        variant="ghost"
      />
    </VStack>
  );
}

export function WithLabel() {
  return <Chips label="Label text" onChange={action('onChange')} value={['2']} options={options} />;
}

export function WithLabelAndTooltip() {
  return (
    <Chips
      label="Label text"
      tooltip="Tooltip text"
      onChange={action('onChange')}
      value={['2']}
      options={options}
    />
  );
}

export function WithHelperText() {
  return (
    <Chips helperText="Helper text" onChange={action('onChange')} value={['2']} options={options} />
  );
}

export function WithErrorMessage() {
  return (
    <Chips
      errorMessage="Error message"
      onChange={action('onChange')}
      value={['2']}
      options={options}
    />
  );
}

export function Invalid() {
  return <Chips isInvalid onChange={action('onChange')} value={['2']} options={options} />;
}

export function AllDisabled() {
  return <Chips isDisabled onChange={action('onChange')} value={['2']} options={options} />;
}

export function ChipDisabled() {
  return (
    <VStack spacing={2}>
      <Chips
        onChange={action('onChange')}
        value={['2']}
        options={[
          {label: 'Chip 1', value: '1'},
          {label: 'Chip 2', value: '2', isDisabled: true},
          {label: 'Chip 3', value: '3', isDisabled: true},
        ]}
      />
      <Chips
        variant="ghost"
        onChange={action('onChange')}
        value={['2']}
        options={[
          {label: 'Chip 1', value: '1'},
          {label: 'Chip 2', value: '2', isDisabled: true},
          {label: 'Chip 3', value: '3', isDisabled: true},
        ]}
      />
    </VStack>
  );
}
