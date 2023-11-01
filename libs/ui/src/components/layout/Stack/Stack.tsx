import { css } from 'styled-components';

import { AriaRole, ReactNode } from 'react';
import { TestIdProps } from '../../../types/TestIdProps';
import { ValueByDevice } from 'libs/ui/src/types/ValueByDevice';
import {
  FlexboxAlign,
  FlexboxDirection,
  FlexboxJustify,
} from '../../../types/Flexbox';
import { Integer } from '../../../types/Integer';
import { CSSDimension } from '../../../types/CSSDimension';
import { useResponsivePropValue } from '../../../hooks/useResponsivePropValue';
import { suffixTestId } from '../../../utils/suffixTestId';
import { getCssSize } from '../../../utils/getCssSize';
import { getSize } from '../../../utils/getSize';

// type ValueByDevice<T> = [mobile: T, tablet: T, notebook: T, desktop: T];

export interface StackProps extends TestIdProps {
  children: ReactNode;
  direction: FlexboxDirection | ValueByDevice<FlexboxDirection>;
  spacing?: Integer | ValueByDevice<Integer>;
  align?: FlexboxAlign | ValueByDevice<FlexboxAlign>;
  justify?: FlexboxJustify | ValueByDevice<FlexboxJustify>;
  shrink?: number;
  grow?: number;
  width?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  height?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  maxWidth?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  maxHeight?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  minWidth?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  minHeight?: Integer | CSSDimension | ValueByDevice<CSSDimension | Integer>;
  wrap?: boolean | ValueByDevice<boolean>;
  role?: AriaRole;
}

export function Stack(props: StackProps) {
  const align = useResponsivePropValue(props.align);
  const spacing = useResponsivePropValue(props.spacing);
  const direction = useResponsivePropValue(props.direction);
  const shouldWrap = useResponsivePropValue(props.wrap);
  const justify = useResponsivePropValue(props.justify);
  const width = useResponsivePropValue(props.width);
  const height = useResponsivePropValue(props.height);
  const maxWidth = useResponsivePropValue(props.maxWidth);
  const maxHeight = useResponsivePropValue(props.maxHeight);
  const minWidth = useResponsivePropValue(props.minWidth);
  const minHeight = useResponsivePropValue(props.minHeight);

  return (
    <div
      data-testid={suffixTestId('stack', props)}
      role={props.role}
      css={css`
        display: flex;
        width: ${getCssSize(width)};
        height: ${getCssSize(height)};
        max-width: ${getCssSize(maxWidth)};
        max-height: ${getCssSize(maxHeight)};
        min-width: ${getCssSize(minWidth)};
        min-height: ${getCssSize(minHeight)};
        flex-grow: ${props.grow ?? 'initial'};
        align-items: ${align ?? 'initial'};
        flex-shrink: ${props.shrink ?? 'initial'};
        flex-direction: ${direction ?? 'row'};
        justify-content: ${justify ?? 'initial'};
        flex-wrap: ${shouldWrap ? 'wrap' : 'initial'};
        gap: ${getSize(spacing ?? 0)};
      `}
    >
      {props.children}
    </div>
  );
}
