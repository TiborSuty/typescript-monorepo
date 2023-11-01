import {Box, Show, Text} from 'platform/foundation';
import {css} from 'styled-components';

import {ReactNode} from 'react';

import {isNotNil} from 'ramda-adjunct';

import {Tooltip as ChakraTooltip} from '@chakra-ui/react';

import {suffixTestId, TestIdProps} from 'shared';

import {Placement} from '../../types/Placement';

export interface TooltipProps extends TestIdProps {
  placement?: Placement;
  label?: ReactNode | string;
  description?: ReactNode;
  isOpen?: boolean;
  openDelay?: number;
  hasAutoWidth?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  onOpen?(): void;
  onClose?(): void;
}

const FixedChakraTooltip: any = ChakraTooltip;

export function Tooltip({children, label, description, ...props}: TooltipProps) {
  return (
    <FixedChakraTooltip
      {...props}
      bg="transparent"
      padding={0}
      maxWidth="none"
      isDisabled={props.isDisabled}
      label={
        isNotNil(label) || isNotNil(description) ? (
          <Box
            backgroundColor="palettes.neutral.900.100"
            borderRadius="border_radius_2"
            maxWidth={props.hasAutoWidth ? '50vw' : 58}
            paddingHorizontal={2}
            paddingVertical={1}
          >
            <Show when={label}>
              <Text
                size="xSmall"
                alternative
                color="white"
                data-testid={suffixTestId(`tooltipLabel`, props)}
              >
                {label}
              </Text>
            </Show>
            <Show when={description}>
              <Text
                size="xSmall"
                color="white"
                data-testid={suffixTestId(`tooltipDescription`, props)}
              >
                {description}
              </Text>
            </Show>
          </Box>
        ) : undefined
      }
    >
      <div
        css={css`
          display: inherit;
        `}
      >
        {children}
      </div>
    </FixedChakraTooltip>
  );
}
