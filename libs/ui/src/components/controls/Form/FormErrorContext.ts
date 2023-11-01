import { createContext } from 'react';
import { FieldError } from 'react-hook-form';
import { Nullish } from '../../../types/Nullish';

export type SetFormErrorCallback = (
  name: string,
  error: FieldError | Nullish
) => void;

/**
 * @about Provides a callback which allows
 * to send/set validation error
 *
 * @example Used in Wizard component get current
 * errors for specific wizard step.
 *
 */
export const FormErrorContext = createContext<SetFormErrorCallback | null>(
  null
);
