import {HStack} from '../HStack/HStack';
import {VStack} from '../VStack/VStack';
import {Space} from './Space';

export default {
  title: 'Foundation/Space',
  component: Space,
};

export function Horizontal() {
  return (
    <HStack>
      There
      <Space horizontal={10} />
      is
      <Space horizontal={10} />
      a
      <Space horizontal={10} />
      space
      <Space horizontal={10} />
      between
      <Space horizontal={10} />
      every
      <Space horizontal={10} />
      word
    </HStack>
  );
}

export function Vertical() {
  return (
    <VStack>
      There
      <Space vertical={10} />
      is
      <Space vertical={10} />
      a
      <Space vertical={10} />
      space
      <Space vertical={10} />
      between
      <Space vertical={10} />
      every
      <Space vertical={10} />
      word
    </VStack>
  );
}

export function FillAvailable() {
  return (
    <HStack>
      The space
      <Space fillAvailable />
      can grow
    </HStack>
  );
}

export function Max() {
  return (
    <HStack>
      This space is
      <Space fillAvailable max={50} />
      maxed to 50 * base step
    </HStack>
  );
}
