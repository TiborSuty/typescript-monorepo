import {render} from '@testing-library/react';

import {MemoryRouter, Route, Routes} from 'react-router-dom';

import {composePath} from '../../utils/composePath';
import {useRequiredParams} from '../useRequiredParams';

const routePath = '/test/:param1/:param2';
const mockParam1 = 'value1';
const mockParam2 = 'value2';

const TestComponent = () => {
  const params = useRequiredParams();

  return (
    <div>
      <span data-testid="param1">{params.param1}</span>
      <span data-testid="param2">{params.param2}</span>
    </div>
  );
};

describe('useRequiredParams', () => {
  it('should return a proxied object with required params', () => {
    const initialEntries = composePath(routePath, {
      params: {param1: mockParam1, param2: mockParam2},
    });

    const {getByTestId} = render(
      <MemoryRouter initialEntries={[initialEntries]}>
        <Routes>
          <Route path="/test/:param1/:param2" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    const param1Element = getByTestId('param1');
    const param2Element = getByTestId('param2');

    expect(param1Element.textContent).toBe(mockParam1);
    expect(param2Element.textContent).toBe(mockParam2);
  });
});
