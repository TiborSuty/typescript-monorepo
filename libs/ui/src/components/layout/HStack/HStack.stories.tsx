import {ReactElement} from 'react';

import {HStack} from './HStack';

export default {
  title: 'Foundation/HStack',
  component: HStack,
};

export function Basic() {
  return (
    <HStack spacing={4}>
      <Item index={0} />
      <Item index={1} />
    </HStack>
  );
}

export function Justify() {
  return (
    <HStack spacing={4} justify="flex-end">
      <Item index={0} />
      <Item index={1} />
    </HStack>
  );
}

export function Responsive() {
  return (
    <HStack spacing={[1, 5, 10, 20]}>
      <Item index={0} />
      <Item index={1} />
    </HStack>
  );
}

interface ItemProps {
  index: number;
}

function Item({index}: ItemProps): ReactElement {
  return <div style={{background: 'rgb(255, 214, 232)', color: 'white'}}>Item {index + 1}</div>;
}
