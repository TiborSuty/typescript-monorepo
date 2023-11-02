import {renderHook, act} from '@testing-library/react';

import {useDebouncedValue} from '../useDebouncedValue';

jest.useFakeTimers();

describe('testing useDebouncedValue hook', () => {
  it('should update value after specified delay', () => {
    const {result, rerender} = renderHook(({value, delay}) => useDebouncedValue(value, delay), {
      initialProps: {value: '', delay: 50},
    });

    expect(result.current).toBe('');

    jest.advanceTimersByTime(51);
    expect(result.current).toBe('');

    rerender({value: 'Hello World', delay: 50});
    expect(result.current).toBe('');

    jest.advanceTimersByTime(49);
    expect(result.current).toBe('');

    act(() => {
      jest.advanceTimersByTime(2);
    });
    expect(result.current).toBe('Hello World');
  });
});
