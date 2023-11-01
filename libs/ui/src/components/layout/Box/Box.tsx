import { css, useTheme } from 'styled-components';

import {
  AriaRole,
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';

import { path } from 'ramda';
import { isNotNil } from 'ramda-adjunct';
import {
  ThemeColorPath,
  ThemeRadiusPath,
  ThemeShadowsPath,
  ThemeZIndexPath,
} from '../../../theme/theme';
import { Integer } from '../../../types/Integer';
import { ValueByDevice } from '../../../types/ValueByDevice';
import { CSSDimension } from '../../../types/CSSDimension';
import { useResponsivePropValue } from '../../../hooks/useResponsivePropValue';
import { getCssSize } from '../../../utils/getCssSize';
import { getSize } from '../../../utils/getSize';
import { suffixTestId } from '../../../utils/suffixTestId';
import { TestIdProps } from '../../../types/TestIdProps';

export interface BoxProps extends TestIdProps {
  ref?: ForwardedRef<HTMLDivElement>;
  children?: ReactNode;
  role?: AriaRole;
  backgroundColor?: ThemeColorPath;
  /**
   * @about Multiplier of the design system's base step
   */
  padding?: Integer | ValueByDevice<Integer>;
  paddingHorizontal?: Integer | ValueByDevice<Integer>;
  paddingVertical?: Integer | ValueByDevice<Integer>;
  paddingTop?: Integer | ValueByDevice<Integer>;
  paddingLeft?: Integer | ValueByDevice<Integer>;
  paddingRight?: Integer | ValueByDevice<Integer>;
  paddingBottom?: Integer | ValueByDevice<Integer>;
  /**
   * Define only width and style
   * Use borderColor to set color
   * @example border="1px solid"
   */
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderColor?: ThemeColorPath;
  borderRadius?: ThemeRadiusPath | ValueByDevice<ThemeRadiusPath>;
  boxShadow?: ThemeShadowsPath;
  bottom?: CSSDimension | Integer;
  left?: CSSDimension | Integer;
  position?: CSSProperties['position'];
  right?: CSSDimension | Integer;
  top?: CSSDimension | Integer;
  width?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  height?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  maxHeight?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  maxWidth?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  minHeight?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  minWidth?: CSSDimension | Integer | ValueByDevice<CSSDimension | Integer>;
  zIndex?: ThemeZIndexPath;
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: CSSDimension | Integer;
  overflow?: 'auto' | 'hidden';
  overflowY?: 'auto' | 'hidden';
  overflowX?: 'auto' | 'hidden';
  opacity?: number;
  contain?: CSSProperties['contain'];
  transition?: string;
}

export const Box = forwardRef(BoxComponent);
export function BoxComponent(
  props: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const theme = useTheme();

  const padding = useResponsivePropValue(props.padding);
  const paddingVertical = useResponsivePropValue(props.paddingVertical);
  const paddingHorizontal = useResponsivePropValue(props.paddingHorizontal);
  const paddingLeft = useResponsivePropValue(props.paddingLeft);
  const paddingRight = useResponsivePropValue(props.paddingRight);
  const paddingTop = useResponsivePropValue(props.paddingTop);
  const paddingBottom = useResponsivePropValue(props.paddingBottom);
  const borderRadius = useResponsivePropValue(props.borderRadius);
  const width = useResponsivePropValue(props.width);
  const height = useResponsivePropValue(props.height);
  const maxWidth = useResponsivePropValue(props.maxWidth);
  const maxHeight = useResponsivePropValue(props.maxHeight);
  const minWidth = useResponsivePropValue(props.minWidth);
  const minHeight = useResponsivePropValue(props.minHeight);

  const token = (key: string) => path<string>(key.split('.'), theme) ?? '';

  return (
    <div
      ref={ref}
      role={props.role}
      css={css`
        flex-grow: ${props.flexGrow ?? props.flex ?? 'initial'};
        flex-shrink: ${props.flexShrink ?? props.flex ?? 'initial'};
        flex-basis: ${props.flexBasis
          ? getCssSize(props.flexBasis)
          : isNotNil(props.flex)
          ? '0%'
          : 'initial'};

        padding-top: ${getSize(paddingTop ?? paddingVertical ?? padding ?? 0)};
        padding-left: ${getSize(
          paddingLeft ?? paddingHorizontal ?? padding ?? 0
        )};
        padding-right: ${getSize(
          paddingRight ?? paddingHorizontal ?? padding ?? 0
        )};
        padding-bottom: ${getSize(
          paddingBottom ?? paddingVertical ?? padding ?? 0
        )};

        border-bottom: ${props.borderBottom};
        border-left: ${props.borderLeft};
        border-right: ${props.borderRight};
        border-top: ${props.borderTop};
        border: ${props.border};
        border-color: ${token('colors.' + props.borderColor)};
        border-radius: ${token('radii.' + borderRadius)};

        top: ${getCssSize(props.top)};
        left: ${getCssSize(props.left)};
        right: ${getCssSize(props.right)};
        bottom: ${getCssSize(props.bottom)};
        position: ${props.position};

        height: ${getCssSize(height)};
        width: ${getCssSize(width)};
        max-height: ${getCssSize(maxHeight)};
        min-height: ${getCssSize(minHeight)};
        max-width: ${getCssSize(maxWidth)};
        min-width: ${getCssSize(minWidth)};

        box-shadow: ${token('shadows.' + props.boxShadow)};
        background-color: ${token(`colors.${props.backgroundColor}`)};
        opacity: ${props.opacity};

        z-index: ${token('zIndices.' + props.zIndex)};
        contain: ${props.contain};
        overflow: ${props.overflow};
        overflow-y: ${props.overflowY};
        overflow-x: ${props.overflowX};
        transition: ${props.transition};
      `}
      data-testid={suffixTestId('box', props)}
    >
      {props.children}
    </div>
  );
}
