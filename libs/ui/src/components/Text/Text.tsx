import { css, useTheme } from 'styled-components';

import { AriaRole, ReactNode } from 'react';

import { useResponsivePropValue } from '../../hooks/useResponsivePropValue';
import { ValueByDevice } from '../../types/ValueByDevice';
import { TestIdProps } from '../../types/TestIdProps';
import { Nullish } from '../../types/Nullish';
import { suffixTestId } from '../../utils/suffixTestId';
import { getWhiteSpaceCSSValue } from '../../utils/getWhiteSpaceCSSValue';

export type TextAlign = 'left' | 'center' | 'right';
export type TextSize = 'large' | 'base' | 'small' | 'xSmall' | 'xxSmall';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'link'
  | 'white'
  | 'success'
  | 'warning'
  | 'informational';

export interface TextProps extends TestIdProps {
  size?: TextSize;
  color?: TextColor | Nullish;
  inline?: true;
  alternative?: boolean | Nullish;
  strikethrough?: boolean | Nullish;
  children?: string | ReactNode | Nullish;
  noWrap?: boolean;
  preWrap?: boolean;
  role?: AriaRole;
  overflowWrap?: 'anywhere';
  title?: string;
  align?: TextAlign | ValueByDevice<TextAlign>;
}

export function Text(props: TextProps) {
  const theme = useTheme();

  const align = useResponsivePropValue(props.align);

  return (
    <div
      data-testid={suffixTestId('text', props)}
      role={props.role}
      css={css`
        display: ${props.inline ? 'inline' : 'block'};
        text-decoration: ${props.strikethrough ? 'line-through' : 'none'};
        color: ${theme.colors.text[props.color ?? 'primary']};
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.text[props.size ?? 'base']};
        line-height: ${theme.lineHeights.text[props.size ?? 'base']};
        font-weight: ${theme.fontWeights.text[
          props.alternative ? 'alternative' : 'default'
        ]};
        text-overflow: ${props.noWrap ? 'ellipsis' : 'initial'};
        white-space: ${getWhiteSpaceCSSValue(props)};
        overflow: ${props.noWrap ? 'hidden' : 'initial'};
        letter-spacing: 0;
        overflow-wrap: ${props.overflowWrap ?? 'initial'};
        text-align: ${align};
      `}
      title={props.title}
    >
      {props.children}
    </div>
  );
}
