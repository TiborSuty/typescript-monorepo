import {getSize} from 'platform/foundation';
import {css, useTheme} from 'styled-components';

import {ForwardedRef, ReactNode, forwardRef} from 'react';

import {Nullish, TestIdProps} from 'shared';

export interface PlatformInputWrapperProps extends TestIdProps {
  children: ReactNode;
  isDisabled: boolean | Nullish;
  isInvalid: boolean | Nullish;
  isRecommended: boolean | Nullish;
  onClick?: VoidFunction;
}

/**
 * @private
 * This component is a platform only bulding block
 * Do not use this anywhere outside of platform
 */
export const PlatformInputWrapper = forwardRef(PlatformInputWrapperComponent);
function PlatformInputWrapperComponent(
  props: PlatformInputWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const theme = useTheme();

  return (
    <div
      ref={ref}
      onClick={props.onClick}
      css={css`
        display: flex;
        align-items: center;
        min-height: 0;
        width: 100%;
        border: 1px solid;
        height: ${getSize(8)};
        max-height: ${getSize(8)};
        border-radius: ${theme.radii.border_radius_2};
        border-color: ${theme.colors.palettes.neutral[70][100]};
        background: ${theme.colors.palettes.white[10][100]};
        color: ${theme.colors.text.primary};
        padding-left: ${getSize(2)};
        padding-right: ${getSize(2)};
        overflow: hidden;

        :focus-within {
          border-color: ${theme.colors.severity.informational};
          box-shadow: ${theme.shadows.active};
          background: ${theme.colors.palettes.white[10][100]};
        }

        ${!props.isDisabled &&
        css`
          :hover {
            border-color: ${theme.colors.severity.informational};
            background: ${theme.colors.palettes.white[10][100]};
          }
        `}

        ${!!props.isRecommended &&
        !props.isInvalid &&
        css`
          background: ${theme.colors.palettes.orange[10][100]};
        `}

        ${!!props.isDisabled &&
        css`
          box-shadow: none;
          cursor: not-allowed;
          border-color: ${theme.colors.palettes.neutral[70][40]};
          background: ${theme.colors.palettes.white[10][40]};
        `}

        ${!!props.isInvalid &&
        css`
          border-color: ${theme.colors.severity.danger};
        `}
      `}
    >
      {props.children}
    </div>
  );
}
