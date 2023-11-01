import {action} from '@storybook/addon-actions';

import {VStack} from '../VStack/VStack';
import {Link} from './Link';

export default {
  title: 'Foundation/Link',
  component: Link,
};

export function Href() {
  return <Link href="https://eag.group/" target="_blank" title="Link to EAG" />;
}

export function OnClick() {
  return <Link onClick={action('onClick')} title="Clickable Link" />;
}

export function Size() {
  return (
    <VStack spacing={2}>
      <Link size="base" title="Base Link" />
      <Link size="small" title="Small Link" />
      <Link size="xSmall" title="XSmall Link" />
    </VStack>
  );
}

export function LeftIcon() {
  return <Link leftIcon="action/open_in_new" href="https://eag.group/" title="Left Icon" />;
}

export function RightIcon() {
  return <Link rightIcon="action/open_in_new" href="https://eag.group/" title="Right Icon" />;
}

export function Disabled() {
  return <Link isDisabled href="https://eag.group/" title="Disabled Link" />;
}
