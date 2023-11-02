import { css, useTheme } from 'styled-components';
import { match, Pattern } from 'ts-pattern';

import { MouseEvent } from 'react';

import { always } from 'ramda';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { TextColor, Text } from '../../Text/Text';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Box } from '../../layout/Box/Box';
import { Center } from '../../layout/Center/Center';

export interface ChipProps extends FormControlProps<boolean>, TestIdProps {
  label: string;
  size?: 'small' | 'default';
  variant?: 'default' | 'ghost';
}

export function Chip(props: ChipProps) {
  const theme = useTheme();

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    if (props.isDisabled) {
      event.preventDefault();
      return;
    }

    props.onChange?.(props.value);
  };

  const isSmall = props.size === 'small';
  const isSelected = !!props.value;

  const textColor = match<[boolean, ChipProps['variant']], TextColor>([
    isSelected,
    props.variant,
  ])
    .with([true, 'ghost'], always('link'))
    .with([false, 'ghost'], always('primary'))
    .with([true, Pattern.any], always('white'))
    .otherwise(always('primary'));

  const backgroundColor = match([isSelected, props.variant])
    .with([true, 'ghost'], always(theme.colors.palettes.blue[20][100]))
    .with([false, 'ghost'], always(theme.colors.general.transparent))
    .with([true, Pattern.any], always(theme.colors.general.accent))
    .otherwise(always(theme.colors.palettes.neutral['30']['100']));

  const hoverBackgroundColor = match([isSelected, props.variant])
    .with([true, 'ghost'], always(theme.colors.palettes.blue[20][100]))
    .with([true, Pattern.any], always(theme.colors.general.accent))
    .otherwise(always(theme.colors.palettes.neutral['40']['100']));

  return (
    <div
      data-testid={suffixTestId('chip', props)}
      onClick={handleOnClick}
      aria-checked={props.value ? true : undefined}
      aria-disabled={props.isDisabled}
      role="checkbox"
      css={css`
        display: inline-block;
        border-radius: ${({ theme }) => theme.radii.border_radius_4};
        pointer-events: ${props.isDisabled ? 'none' : 'auto'};
        opacity: ${props.isDisabled ? 0.4 : 1};
        cursor: pointer;

        background-color: ${backgroundColor};
        &:hover {
          background-color: ${hoverBackgroundColor};
        }
      `}
    >
      <Box paddingHorizontal={isSmall ? 2 : 3}>
        <Center height={isSmall ? 6 : 8}>
          <Text
            color={textColor}
            size={isSmall ? 'xSmall' : 'small'}
            noWrap
            data-testid={suffixTestId('chipContent', props)}
          >
            {props.label}
          </Text>
        </Center>
      </Box>
    </div>
  );
}
