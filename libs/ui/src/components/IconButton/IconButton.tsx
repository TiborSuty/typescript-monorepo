import { css, useTheme } from 'styled-components';

import { MouseEventHandler } from 'react';
import { TestIdProps } from '../../types/TestIdProps';
import {
  DefaultFoundationTheme,
  ThemeColorPath,
  ThemeIconKey,
} from '../../theme/theme';
import { Severity } from '../../types/Severity';
import { getCssSize } from '../../utils/getCssSize';
import { suffixTestId } from '../../utils/suffixTestId';
import { Icon } from '../Icon/Icon';

export type IconButtonPriority =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'default';

export interface IconButtonProps extends TestIdProps {
  icon: ThemeIconKey;
  isDisabled?: boolean;
  severity?: Severity;
  size?: 'small' | 'default';
  priority?: IconButtonPriority;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function IconButton(props: IconButtonProps) {
  const theme = useTheme();

  const size = getCssSize('small' === props.size ? 6 : 8);

  return (
    <button
      data-testid={suffixTestId('iconButton', props)}
      onClick={props.onClick}
      disabled={props.isDisabled}
      type="button"
      css={css`
        width: ${size};
        height: ${size};
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: ${theme.radii.border_radius_2};
        pointer-events: ${props.isDisabled ? 'none' : 'all'};
        ${getColorStyle(
          theme,
          props.priority,
          props.severity,
          props.isDisabled
        )}
      `}
    >
      <Icon
        color={getIconColor(props.priority, props.severity)}
        value={props.icon}
        size={4}
      />
    </button>
  );
}

const getColorStyle = (
  theme: DefaultFoundationTheme,
  priority?: IconButtonPriority,
  severity?: Severity,
  disabled?: boolean
) => {
  switch (priority) {
    case 'primary':
      return css`
        background-color: ${severity
          ? theme.colors.severity[severity]
          : theme.colors.general.accent};
        &:hover {
          background-color: ${severity
            ? theme.colors.severity.hover[severity]
            : theme.colors.palettes.blue[70][100]};
        }
        &:active {
          background-color: ${severity
            ? theme.colors.severity.active[severity]
            : theme.colors.palettes.blue[80][100]};
        }
      `;

    case 'secondary':
      return css`
        background-color: ${theme.colors.palettes.neutral[30][100]};
        &:hover {
          background-color: ${theme.colors.palettes.neutral[40][100]};
        }
        &:active {
          background-color: ${theme.colors.palettes.neutral[50][100]};
        }
      `;

    case 'tertiary':
      return css`
        background-color: ${theme.colors.palettes.white};
        border: 1px solid
          ${severity
            ? theme.colors.severity.active[severity]
            : theme.colors.palettes.neutral[70][100]};
        opacity: ${disabled ? 0.4 : undefined};
        &:hover {
          border-color: ${severity
            ? theme.colors.severity.active[severity]
            : theme.colors.palettes.neutral[200][100]};
        }
        &:active {
          border-color: ${severity
            ? theme.colors.severity.active[severity]
            : theme.colors.palettes.neutral[900][100]};
        }
      `;

    default:
      return css`
        opacity: ${disabled ? 0.4 : undefined};
        background-color: transparent;
        &:hover {
          background-color: ${theme.colors.palettes.neutral[30][100]};
        }
        &:active {
          background-color: ${theme.colors.palettes.neutral[40][100]};
        }
      `;
  }
};

const getIconColor = (
  priority?: IconButtonPriority,
  severity?: Severity
): ThemeColorPath => {
  if ('primary' === priority) return 'general.white';
  return severity ? `severity.${severity}` : 'text.primary';
};
