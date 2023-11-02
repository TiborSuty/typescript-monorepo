import { css, useTheme } from 'styled-components';
import { TestIdProps } from '../../../types/TestIdProps';
import { Nullish } from '../../../types/Nullish';
import { Integer } from '../../../types/Integer';
import { Stack } from '../Stack/Stack';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Space } from '../Space/Space';

export interface SeparatorProps extends TestIdProps {
  orientation?: 'horizontal' | 'vertical' | Nullish;
  spacing?: Integer | Nullish;
}

export function Separator(props: SeparatorProps) {
  const theme = useTheme();

  const spacing = props.spacing ?? 4;
  const isVertical = 'vertical' === props.orientation;

  return (
    <Stack
      direction={isVertical ? 'row' : 'column'}
      width={!isVertical ? '100%' : undefined}
      data-testid={suffixTestId('separatorWrapper', props)}
    >
      <Space
        vertical={isVertical ? 0 : spacing}
        horizontal={isVertical ? spacing : 0}
      />
      <div
        aria-hidden
        css={css`
          flex-grow: 1;
          width: ${isVertical ? '1px' : 'auto'};
          height: ${isVertical ? '100%' : '1px'};
          background-color: ${theme.colors.general.separator};
        `}
      />
      <Space
        vertical={isVertical ? 0 : spacing}
        horizontal={isVertical ? spacing : 0}
      />
    </Stack>
  );
}
