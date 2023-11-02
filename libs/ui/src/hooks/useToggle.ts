import {useCallback, useState} from 'react';

/**
 * @about React hook for simple on/off toggle
 * @returns {boolean} isTrue
 * @returns {Function} toggle true/false
 * @example
 * const [isOpen, toggleOpen] = useToggle();
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle] as const;
}
