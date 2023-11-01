import {VStack} from 'platform/foundation';

import {Button} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export function Default() {
  return <Button title="Button" />;
}

export function Variant() {
  return (
    <VStack spacing={4}>
      <Button variant="primary" title="Primary" />
      <Button variant="secondary" title="Secondary" />
      <Button variant="outlined" title="Outlined" />
      <Button variant="link" title="Link" />
      <Button variant="ghost" title="Ghost" />
      <Button variant="ghostLink" title="GhostLink" />
      <Button variant="errorLink" title="ErrorLink" />
      <Button variant="danger" title="Danger" />
      <Button variant="dangerOutlined" title="DangerOutlined" />
      <Button variant="dangerLink" title="DangerLink" />
      <Button variant="dangerGhost" title="DangerGhost" />
    </VStack>
  );
}

export function Size() {
  return (
    <VStack spacing={4}>
      <Button size="default" title="Default" />
      <Button size="small" title="Small" />
    </VStack>
  );
}

export function WithIcon() {
  return <Button leftIcon="action/info" rightIcon="alert/error" title="With icon" />;
}

export function WithColoredIcon() {
  return (
    <Button
      leftIcon="action/info"
      rightIcon="alert/error"
      iconColor="severity.danger"
      title="With icon"
    />
  );
}
