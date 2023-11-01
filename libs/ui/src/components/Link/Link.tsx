import { css } from 'styled-components';

import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react';

import { isNotNil } from 'ramda-adjunct';

import { Icon } from '../Icon/Icon';
import { Show } from '../Show/Show';
import { Text } from '../Text/Text';
import { TestIdProps } from '../../types/TestIdProps';
import { Nullish } from '../../types/Nullish';
import { ThemeIconKey } from '../../theme/theme';
import { suffixTestId } from '../../utils/suffixTestId';
import { HStack } from '../layout/HStack/HStack';

export interface LinkProps extends TestIdProps {
  href?: string | null;
  title?: string | Nullish;
  size?: 'base' | 'small' | 'xSmall';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  leftIcon?: ThemeIconKey;
  rightIcon?: ThemeIconKey;
  target?: HTMLAttributeAnchorTarget;
  download?: string | boolean;
  isDisabled?: boolean;
  rel?: string;
}

export function Link(props: LinkProps) {
  return (
    <a
      rel={props.rel}
      target={props.target}
      download={props.download}
      href={props.isDisabled ? undefined : props.href ?? undefined}
      onClick={props.isDisabled ? undefined : props.onClick}
      aria-disabled={props.isDisabled}
      css={css`
        display: inline-block;
        color: ${({ theme }) => theme.colors.general.accent};
        cursor: ${props.isDisabled ? 'not-allowed' : 'pointer'};
        opacity: ${props.isDisabled ? 0.7 : undefined};
        &:focus {
          box-shadow: none;
        }
        &:hover {
          text-decoration: ${props.isDisabled ? 'none' : 'underline'};
        }
      `}
      data-testid={suffixTestId('link', props)}
    >
      <HStack spacing={1} align="center">
        <Show when={isNotNil(props.leftIcon)}>
          <Icon size={4} color="general.accent" value={props.leftIcon} />
        </Show>
        <Text
          color="link"
          size={props.size}
          data-testid={suffixTestId('linkContent', props)}
        >
          {props.title}
        </Text>
        <Show when={isNotNil(props.rightIcon)}>
          <Icon size={4} color="general.accent" value={props.rightIcon} />
        </Show>
      </HStack>
    </a>
  );
}
