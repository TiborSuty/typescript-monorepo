import { css, useTheme } from 'styled-components';

import { CSSProperties, MouseEventHandler, Suspense } from 'react';

import { isNotNil } from 'ramda-adjunct';

import { useResponsivePropValue } from '../../hooks/useResponsivePropValue';
import { Integer } from '../../types/Integer';
import { ValueByDevice } from '../../types/ValueByDevice';
import { TestIdProps } from '../../types/TestIdProps';
import { ThemeColorPath, ThemeIconKey } from '../../theme/theme';
import { suffixTestId } from '../../utils/suffixTestId';
import { getColorByPath } from '../../utils/getColorByPath';

export interface IconProps extends TestIdProps {
  value: ThemeIconKey | undefined;
  color?: ThemeColorPath;
  cursor?: CSSProperties['cursor'];
  size?: Integer | ValueByDevice<Integer>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function Icon(props: IconProps) {
  const theme = useTheme();
  const size = useResponsivePropValue(props.size ?? 6);
  const cssSize = theme.getSize(size);

  if (!props.value) return null;

  const IconComponent = theme.icons?.[props.value];

  const color = props.color
    ? getColorByPath(props.color, theme)
    : 'currentColor';

  return (
    <div
      role="img"
      css={css`
        cursor: ${props.onClick ? 'pointer' : undefined};
        color: ${color};
        svg {
          width: ${cssSize};
          height: ${cssSize};
        }
        svg:not([data-iconkey^='flags/']):not(
            [data-iconkey^='files_compact/']
          ):not([data-iconkey^='files_default/']):not(
            [data-iconkey^='condition/']
          ):not([data-iconkey^='automotive/']) {
          path {
            fill: currentColor;
          }
        }
      `}
      onClick={props.onClick}
      data-iconkey={props.value}
      data-testid={suffixTestId('icon', props)}
    >
      <Suspense fallback={theme.icons.fallback}>
        {isNotNil(IconComponent) && (
          <IconComponent data-iconkey={props.value} />
        )}
      </Suspense>
    </div>
  );
}
