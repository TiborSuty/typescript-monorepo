import styled, { css } from 'styled-components';

import { MouseEventHandler } from 'react';
import { TestIdProps } from '../../types/TestIdProps';
import { Spinner } from '../Spinner/Spinner';
import { ThemeColorPath, ThemeIconKey } from '../../theme/theme';
import { Box } from '../layout/Box/Box';
import { Icon } from '../Icon/Icon';
import { suffixTestId } from '../../utils/suffixTestId';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'outlined'
  | 'ghost'
  | 'ghostLink'
  | 'errorLink'
  | 'link'
  | 'dangerOutlined'
  | 'dangerGhost'
  | 'dangerLink';

export type ButtonSize = 'small' | 'default';

export interface ButtonProps extends TestIdProps {
  title?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  leftIcon?: ThemeIconKey;
  rightIcon?: ThemeIconKey;
  iconColor?: ThemeColorPath;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Button element HTML5 attribute used in FormButton
   */
  form?: string;
}

export function Button(props: ButtonProps) {
  const content = (
    <>
      {props.isLoading && <Spinner variant="overlay" size="small" />}

      {props.leftIcon && (
        <Box paddingRight={1}>
          <Icon size={4} value={props.leftIcon} color={props.iconColor} />
        </Box>
      )}

      {props.title}

      {props.rightIcon && (
        <Box paddingLeft={1}>
          <Icon size={4} value={props.rightIcon} color={props.iconColor} />
        </Box>
      )}
    </>
  );

  return (
    <StyledButton
      role="button"
      type={props.type ?? 'button'}
      disabled={props.isDisabled}
      isLoading={props.isLoading}
      variant={props.variant}
      size={props.size}
      form={props.form}
      onClick={props.onClick}
      isFullWidth={props.isFullWidth}
      data-testid={suffixTestId('button', props)}
    >
      {content}
    </StyledButton>
  );
}

// eslint-disable-next-line eag/no-css-property
const baseStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.text.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.text.small};
  letter-spacing: 0;
  white-space: nowrap;
  transition: all 250ms;

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const loadingStyles = css`
  pointer-events: none;
  opacity: 0.4;
`;

const variants: Record<ButtonVariant, ReturnType<typeof css>> = {
  // eslint-disable-next-line eag/no-css-property
  primary: css`
    background: ${({ theme }) => theme.colors.general.accent};
    color: ${({ theme }) => theme.colors.general.white};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.palettes.blue[70][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.palettes.blue[80][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.accent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.accent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  secondary: css`
    background: ${({ theme }) => theme.colors.palettes.neutral[30][100]};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.palettes.neutral[40][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.palettes.neutral[50][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.palettes.neutral[30][100]};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.palettes.neutral[30][100]};
    }
  `,
  outlined: css`
    background: ${({ theme }) => theme.colors.general.white};
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.palettes.neutral[70][100]};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.palettes.neutral[200][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.palettes.neutral[900][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.white};
      box-shadow: 0 0 0 1px
        ${({ theme }) => theme.colors.palettes.neutral[70][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.palettes.neutral[70][100]};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  link: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    // color: ${({ theme }) => theme.components?.Button?.variants.link.color};
    border-radius: 0;
    padding: 0 !important;

    &:hover {
      background: ${({ theme }) => theme.colors.general.transparent};
      text-decoration: underline;
    }

    &:active {
      background: ${({ theme }) => theme.colors.general.transparent};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  ghost: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) =>
        theme.components.Button.variants.ghost.hover.backgroundColor};
    }

    &:active {
      background: ${({ theme }) =>
        theme.components.Button.variants.ghost.active.backgroundColor};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  ghostLink: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    color: ${({ theme }) => theme.colors.text.link};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.palettes.neutral[30][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.palettes.neutral[40][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  errorLink: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    color: ${({ theme }) => theme.colors.text.danger};
    border-radius: 0;
    padding: 0 !important;

    &:hover {
      background: ${({ theme }) => theme.colors.general.transparent};
      text-decoration: underline;
    }

    &:active {
      background: ${({ theme }) => theme.colors.general.transparent};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  danger: css`
    background: ${({ theme }) => theme.colors.severity.danger};
    color: ${({ theme }) => theme.colors.general.white};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.palettes.red[70][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.palettes.red[80][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.severity.danger};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.severity.danger};
    }
  `,
  dangerOutlined: css`
    background: ${({ theme }) => theme.colors.general.white};
    color: ${({ theme }) => theme.colors.text.danger};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.severity.danger};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.palettes.red[80][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.palettes.red[90][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.white};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.severity.danger};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.white};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.severity.danger};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  dangerLink: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    color: ${({ theme }) => theme.colors.text.danger};
    border-radius: 0;
    padding: 0 !important;

    &:hover {
      background: ${({ theme }) => theme.colors.general.transparent};
      text-decoration: underline;
    }

    &:active {
      background: ${({ theme }) => theme.colors.general.transparent};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
  // eslint-disable-next-line eag/no-css-property
  dangerGhost: css`
    background: ${({ theme }) => theme.colors.general.transparent};
    color: ${({ theme }) => theme.colors.text.danger};
    border-radius: ${({ theme }) => theme.getSize(1)};

    &:hover {
      background: ${({ theme }) => theme.colors.palettes.neutral[30][100]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.palettes.neutral[40][100]};
    }

    &:focus-visible {
      background: ${({ theme }) => theme.colors.general.transparent};
      box-shadow: 0 0 0 4px
        ${({ theme }) => theme.colors.palettes.blue[40][100]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.general.transparent};
    }
  `,
};

const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
  // eslint-disable-next-line eag/no-css-property
  default: css`
    height: ${({ theme }) => theme.getSize(8)};
    padding: 6px ${({ theme }) => theme.getSize(3)};
  `,
  // eslint-disable-next-line eag/no-css-property
  small: css`
    height: ${({ theme }) => theme.getSize(6)};
    padding: 2px ${({ theme }) => theme.getSize(2)};
  `,
};

const StyledButton = styled.button<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean;
}>`
  ${baseStyles}
  ${(props) => props.isLoading && loadingStyles}
  ${(props) => (props.variant ? variants[props.variant] : variants.primary)}
  ${(props) => (props.size ? sizes[props.size] : sizes.default)}

  ${(props) =>
    props.isFullWidth &&
    css`
      min-width: 100%;
    `}
`;
