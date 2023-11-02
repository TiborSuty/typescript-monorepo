import {useCallback, useState} from 'react';

/**
 * @about React hook to manage boolean on - off states
 * @returns {boolean} isTrue
 * @returns {Function} set to true
 * @returns {Function} set to false
 * @returns {Function} toggle true/false
 * @example
 * const [isLoading, startLoading, stopLoading, toggleLoading] = useBoolean()
 */
export function useBoolean(initial = false) {
  const [value, setValue] = useState(initial);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, on, off, toggle] as const;
}
