import {ReactElement} from 'react';

import {Stack} from './Stack';

export default {
  title: 'Foundation/Stack',
  component: Stack,
};

export function Horizontal() {
  return (
    <Stack direction="row" spacing={4}>
      <Item index={0} />
      <Item index={1} />
    </Stack>
  );
}

export function Vertical() {
  return (
    <Stack direction="column" spacing={4}>
      <Item index={0} />
      <Item index={1} />
    </Stack>
  );
}

export function Responsive() {
  return (
    <Stack direction={['column', 'row', 'column', 'row']} spacing={[1, 5, 10, 20]}>
      <Item index={0} />
      <Item index={1} />
    </Stack>
  );
}

interface ItemProps {
  index: number;
}

function Item({index}: ItemProps): ReactElement {
  return <div style={{background: 'rgb(255, 214, 232)', color: 'white'}}>Item {index + 1}</div>;
}
