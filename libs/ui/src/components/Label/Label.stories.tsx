import {action} from '@storybook/addon-actions';

import {Label} from './Label';

export default {
  title: 'Components/Label',
  component: Label,
};

export function Default() {
  return <Label>Label text</Label>;
}

export function Required() {
  return <Label isRequired>Label text</Label>;
}

export function WithCounter() {
  return (
    <Label currentLength={3} maxLength={10} isCounterVisible>
      Label text
    </Label>
  );
}

export function WithTooltip() {
  return <Label tooltip="Lorem ipsum dolor sit amet">Label text</Label>;
}

export function WithAction() {
  return (
    <Label actions={[{title: 'Create', onClick: action('Create'), leftIcon: 'content/add'}]}>
      Label text
    </Label>
  );
}

export function WithMultipleActions() {
  return (
    <Label
      actions={[
        {title: 'Create', onClick: action('Create'), leftIcon: 'content/add'},
        {title: 'Edit', onClick: action('Edit'), leftIcon: 'image/edit'},
        {title: 'Delete', onClick: action('Delete'), leftIcon: 'action/delete'},
        {title: 'Download', onClick: action('Download'), leftIcon: 'file/download'},
      ]}
    >
      A very long label text should be wrapped. A very long label text should be wrapped. A very
      long label text should be wrapped. A very long label text should be wrapped.
    </Label>
  );
}

export function Recommended() {
  return <Label isRecommended>Label text</Label>;
}
