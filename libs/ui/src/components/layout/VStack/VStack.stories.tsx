import {ReactElement} from 'react';

import {VStack} from './VStack';

export default {
  title: 'Foundation/VStack',
  component: VStack,
};

export function Basic() {
  return (
    <VStack spacing={4}>
      <Item index={0} />
      <Item index={1} />
    </VStack>
  );
}

export function Responsive() {
  return (
    <VStack spacing={[1, 5, 10, 20]}>
      <Item index={0} />
      <Item index={1} />
    </VStack>
  );
}

interface ItemProps {
  index: number;
}

function Item({index}: ItemProps): ReactElement {
  return <div style={{background: 'rgb(255, 214, 232)', color: 'white'}}>Item {index + 1}</div>;
}
