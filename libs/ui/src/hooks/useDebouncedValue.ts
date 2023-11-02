import {useEffect, useState} from 'react';

/**
 * @about Returns debounced value passed by arg
 * @param value value for debounce
 * @param delay debounced delay in ms
 * @returns debouncedValue
 *
 * @example
 * const debouncedValue = useDebouncedValue(value, 500);
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
