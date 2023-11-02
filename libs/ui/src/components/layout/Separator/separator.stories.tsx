import {Separator} from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
};

export function Default() {
  return <Separator />;
}

export function Vertical() {
  return (
    <div style={{height: 500}}>
      <Separator orientation="vertical" />
    </div>
  );
}
