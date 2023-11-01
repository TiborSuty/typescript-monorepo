import {Box} from '../Box/Box';
import {Text} from './Text';

export default {
  title: 'Foundation/Text',
  component: Text,
};

export function Default() {
  return <Text>Default text</Text>;
}

export function Inline() {
  return <Text inline>Inline text</Text>;
}

export function Strikethrough() {
  return <Text strikethrough>Strikethrough text</Text>;
}

export function Color() {
  return (
    <>
      <Text color="primary">Primary Text</Text>
      <Text color="secondary">Secondary Text</Text>
      <Text color="tertiary">Tertiary Text</Text>
      <Text color="danger">Danger Text</Text>
      <Text color="success">Success Text</Text>
      <Text color="link">Link Text</Text>
    </>
  );
}

export function Size() {
  return (
    <>
      <Text size="large">Large Text</Text>
      <Text size="base">Base Text</Text>
      <Text size="small">Small Text</Text>
      <Text size="xSmall">XSmall Text</Text>
      <Text size="xxSmall">XxSmall Text</Text>
    </>
  );
}

export function Alternative() {
  return (
    <>
      <Text alternative size="large">
        Alternative Large Text
      </Text>
      <Text alternative size="base">
        Alternative Base Text
      </Text>
      <Text alternative size="small">
        Alternative Small Text
      </Text>
      <Text alternative size="xSmall">
        Alternative XSmall Text
      </Text>
      <Text alternative size="xxSmall">
        Alternative XxSmall Text
      </Text>
    </>
  );
}

export function CustomRole() {
  return <Text role="article">Text with article role</Text>;
}

export function OverflowWrapAnywhere() {
  return (
    <Box width={50}>
      <Text overflowWrap="anywhere">
        Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.Long-text-without-spaces.
      </Text>
    </Box>
  );
}
