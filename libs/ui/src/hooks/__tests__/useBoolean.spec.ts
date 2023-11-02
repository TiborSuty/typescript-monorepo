import {renderHook, act} from '@testing-library/react';

import {useBoolean} from '../useBoolean';

describe('testing useBoolean hook', () => {
  it('should return correct value', () => {
    const {result} = renderHook(() => useBoolean());

    expect(result.current[0]).toEqual(false);

    act(() => result.current[1]());
    expect(result.current[0]).toEqual(true);

    act(() => result.current[2]());
    expect(result.current[0]).toEqual(false);

    act(() => result.current[3]());
    expect(result.current[0]).toEqual(true);
  });
});
