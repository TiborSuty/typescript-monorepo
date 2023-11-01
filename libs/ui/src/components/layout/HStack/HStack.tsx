import {Stack, StackProps} from '../Stack/Stack';

export interface HStackProps extends Omit<StackProps, 'direction'> {}

export function HStack(props: HStackProps) {
  return <Stack direction="row" {...props} />;
}
