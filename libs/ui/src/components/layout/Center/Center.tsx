import {Stack, StackProps} from '../Stack/Stack';

interface CenterProps
  extends Omit<StackProps, 'direction' | 'align' | 'alignItems' | 'justifyContent'> {}

export function Center(props: CenterProps) {
  return <Stack align="center" justify="center" direction="row" {...props} />;
}
