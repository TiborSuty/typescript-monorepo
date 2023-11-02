import { useEffect, useRef } from 'react';

import { max } from 'ramda';
import { useForceUpdate } from './useForceUpdate';

/**
 * @param skippedChar - Caret will be moved before this character
 * @returns ref to be passed to the input element and a function to trigger the update
 */
export function useUpdateCaret(skippedChar?: string) {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevLen = useRef<number>(0);
  const prevPos = useRef<number>(0);
  const isFocused = useRef<boolean>(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current?.addEventListener(
      'focus',
      () => (isFocused.current = true)
    );
    inputRef.current?.addEventListener(
      'blur',
      () => (isFocused.current = false)
    );

    return () => {
      inputRef.current?.removeEventListener(
        'focus',
        () => (isFocused.current = true)
      );
      inputRef.current?.removeEventListener(
        'blur',
        () => (isFocused.current = false)
      );
    };
  }, [inputRef]);

  useEffect(() => {
    if (!inputRef.current || !isFocused.current) return;

    const offset = inputRef.current?.value.length - prevLen.current;
    let newPos = max(prevPos.current + offset, 0);
    if (inputRef.current?.value[newPos - 1] === skippedChar) newPos--;
    if (
      newPos !== inputRef.current?.selectionStart ||
      newPos !== inputRef.current?.selectionEnd
    )
      inputRef.current.setSelectionRange(newPos, newPos);
  });

  const updateCaret = () => {
    if (!inputRef.current) return;
    prevLen.current = inputRef.current.value.length;
    prevPos.current = inputRef.current.selectionStart ?? 0;
    forceUpdate();
  };

  return { inputRef, updateCaret };
}
