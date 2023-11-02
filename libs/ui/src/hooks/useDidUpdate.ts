import {useEffect, useRef} from 'react';

/*
 * Execute the hook only when the component updates and not when the component is mounted.
 * */
export function useDidUpdate(fn: () => void, dependencies?: any[]) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}
