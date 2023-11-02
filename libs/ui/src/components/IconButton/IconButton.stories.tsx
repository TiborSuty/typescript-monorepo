import {VStack} from 'platform/foundation';

import {IconButton} from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export function Default() {
  return <IconButton icon="action/delete" />;
}

export function Size() {
  return (
    <VStack spacing={4}>
      <IconButton size="small" priority="primary" icon="action/delete" />
      <IconButton size="default" priority="primary" icon="action/delete" />
    </VStack>
  );
}

export function Priority() {
  return (
    <VStack spacing={4}>
      <IconButton priority="primary" icon="action/delete" />
      <IconButton priority="secondary" icon="action/delete" />
      <IconButton priority="tertiary" icon="action/delete" />
    </VStack>
  );
}

export function Severity() {
  return (
    <VStack spacing={4}>
      <IconButton severity="danger" priority="primary" icon="action/delete" />
      <IconButton severity="success" priority="primary" icon="action/delete" />
      <IconButton severity="warning" priority="primary" icon="action/delete" />
      <IconButton severity="informational" priority="primary" icon="action/delete" />
      <IconButton severity="danger" icon="action/delete" />
      <IconButton severity="success" icon="action/delete" />
      <IconButton severity="warning" icon="action/delete" />
      <IconButton severity="informational" icon="action/delete" />
    </VStack>
  );
}

export function Disabled() {
  return (
    <VStack spacing={4}>
      <IconButton isDisabled icon="action/delete" />
      <IconButton isDisabled priority="primary" icon="action/delete" />
      <IconButton isDisabled priority="secondary" icon="action/delete" />
      <IconButton isDisabled priority="tertiary" icon="action/delete" />
    </VStack>
  );
}
