import {renderHook, act} from '@testing-library/react';

import {useToggle} from '../useToggle';

describe('testing useToogle hook', () => {
  it('should return correct value', () => {
    const {result} = renderHook(() => useToggle());

    expect(result.current[0]).toEqual(false);

    act(() => result.current[1]());
    expect(result.current[0]).toEqual(true);

    act(() => result.current[1]());
    expect(result.current[0]).toEqual(false);
  });
});
