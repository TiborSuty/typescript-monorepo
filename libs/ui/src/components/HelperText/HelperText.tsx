import { Nullish } from '../../types/Nullish';
import { TestIdProps } from '../../types/TestIdProps';
import { Space } from '../layout/Space/Space';
import { Text } from '../Text/Text';

export interface HelperTextProps extends TestIdProps {
  helperText?: string | Nullish;
  errorMessage?: string | Nullish;
}

export function HelperText(props: HelperTextProps) {
  const isInvalid = !!props.errorMessage;
  const textColor = isInvalid ? 'danger' : 'tertiary';

  return (
    <>
      <Space vertical={1} />
      <Text size="xSmall" color={textColor} data-testid={props['data-testid']}>
        {props.errorMessage || props.helperText}
      </Text>
    </>
  );
}
