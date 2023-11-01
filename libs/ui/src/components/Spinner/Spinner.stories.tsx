import {Box} from 'platform/foundation';

import {Spinner} from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export function Default() {
  return <Spinner />;
}

export function Overlay() {
  return (
    <Box position="relative" height={60} width={100} backgroundColor="palettes.neutral.80.40">
      <Spinner variant="overlay" />
    </Box>
  );
}

export function Sizes() {
  return (
    <>
      <Spinner size="default" />
      <Spinner size="xSmall" />
      <Spinner size="small" />
      <Spinner size="large" />
    </>
  );
}

export function Color() {
  return (
    <>
      <Spinner colorScheme="white" />
      <Spinner colorScheme="blue" />
    </>
  );
}
