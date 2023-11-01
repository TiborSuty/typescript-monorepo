/**
 * Disable eslint rule preventing styling with css
 * This is base platform component using css pseudo class
 * selectors and custom design tokens combinations
 */

/* eslint-disable eag/no-css-property */
import {css, useTheme} from 'styled-components';

import {ChangeEvent, ForwardedRef, forwardRef} from 'react';

import {Nullish, suffixTestId, TestIdProps} from 'shared';

import {FormControlProps} from '../../../types/FormControlProps';
import {HTMLAutocomplete} from '../HTMLAutocomplete';

export interface NativeInputElementProps
  extends FormControlProps<string | null, HTMLInputElement>,
    TestIdProps {
  id: string;
  isAutoFocused?: boolean;
  autoComplete?: HTMLAutocomplete;
  placeholder?: string | Nullish;
  type?: string;
  maxLength?: number;
  isInvalid: boolean;
  isDisabled: boolean;
}

/**
 * @private
 * This component is a platform only bulding block
 * Do not use this anywhere outside of platform
 */
export const PlatformInputElement = forwardRef(PlatformInputElementComponent);
export function PlatformInputElementComponent(
  props: NativeInputElementProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const theme = useTheme();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value || null;
    props.onChange?.(newValue, event);
  }

  return (
    <input
      css={css`
        background: transparent;
        font-size: ${theme.fontSizes.text.small};
        font-weight: ${theme.fontWeights.text.default};
        line-height: ${theme.lineHeights.text.small};
        color: ${theme.colors.text.primary};
        border: none;
        outline: none;
        width: 100%;

        ::placeholder {
          color: ${theme.colors.text.tertiary};
        }

        :autofill,
        :autofill:focus {
          box-shadow: 0 0 0 300px ${theme.colors.palettes.yellow[20][100]} inset,
            0 0 0 100px ${theme.colors.palettes.yellow[20][100]};
          text-fill-color: ${theme.colors.text.primary};
        }

        :-webkit-autofill,
        :-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 300px ${theme.colors.palettes.yellow[20][100]} inset,
            0 0 0 100px ${theme.colors.palettes.yellow[20][100]};
          -webkit-text-fill-color: ${theme.colors.text.primary};
        }

        :focus,
        :focus-visible {
          border-color: none;
          box-shadow: none;
          outline: none;
        }

        :disabled {
          -webkit-text-fill-color: ${theme.colors.text.primary};
        }
        ${props.isDisabled &&
        css`
          cursor: not-allowed;
        `}
      `}
      id={props.id}
      ref={ref}
      type={props.type}
      name={props.name}
      maxLength={props.maxLength}
      autoComplete={props.autoComplete || undefined}
      aria-required={props.isRequired || undefined}
      aria-invalid={props.isInvalid || undefined}
      aria-disabled={props.isDisabled || undefined}
      disabled={props.isDisabled || undefined}
      placeholder={props.placeholder ?? undefined}
      value={props.value || ''}
      autoFocus={props.isAutoFocused}
      onChange={handleChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      data-testid={suffixTestId('input', props)}
    />
  );
}
