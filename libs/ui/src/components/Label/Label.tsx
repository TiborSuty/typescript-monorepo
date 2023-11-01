import { isNotNilOrEmpty } from 'ramda-adjunct';

import { getMaxLengthCounterText } from './getMaxLengthCounterText';
import { LabelActions } from './LabelActions';
import { TestIdProps } from '../../types/TestIdProps';
import { Nullish } from '../../types/Nullish';
import { HStack } from '../layout/HStack/HStack';
import { Show } from '../Show/Show';
import { Space } from '../layout/Space/Space';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

export interface LabelProps extends TestIdProps {
  children: string | Nullish;
  id?: string;
  maxLength?: number;
  currentLength?: number;
  isCounterVisible?: boolean;
  isRequired?: boolean | Nullish;
  isRecommended?: boolean | Nullish;
  tooltip?: string | Nullish;
  actions?: LabelActions;
}

export function Label(props: LabelProps) {
  if (!props.children) return null;

  const mainColor = props.isRecommended ? 'warning' : 'secondary';

  return (
    <>
      <HStack spacing={4} justify="space-between" align="flex-start">
        <HStack spacing={1}>
          <label htmlFor={props.id} data-testid={props['data-testid']}>
            <Text size="xSmall" color={mainColor}>
              {`${props.isRequired ? REQUIRED_INDICATOR : ''}${props.children}`}
            </Text>
          </label>
          <Show when={props.tooltip}>
            <Tooltip description={props.tooltip}>
              <Icon value="action/help" color="text.secondary" size={4} />
            </Tooltip>
          </Show>
        </HStack>
        <Show when={props.isCounterVisible}>
          <Text size="xSmall" color="secondary" noWrap>
            {getMaxLengthCounterText(
              props.currentLength ?? 0,
              props.maxLength ?? 0
            )}
          </Text>
        </Show>
        <Show when={isNotNilOrEmpty(props.actions)}>
          <HStack spacing={2}>
            {props.actions?.map((action) => (
              <Link
                key={action.title}
                title={action.title}
                onClick={action.onClick}
                leftIcon={action.leftIcon}
                isDisabled={action.isDisabled}
                size="xSmall"
              />
            ))}
          </HStack>
        </Show>
      </HStack>
      <Space vertical={1} />
    </>
  );
}

const REQUIRED_INDICATOR = '* ';
