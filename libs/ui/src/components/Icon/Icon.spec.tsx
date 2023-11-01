import {render} from '@testing-library/react';

import {appendSuffix} from 'shared';

import {FoundationProvider} from '../FoundationProvider/FoundationProvider';
import {Icon} from './Icon';

describe('<Icon />', () => {
  it('renders one image', () => {
    const {container} = render(
      <FoundationProvider>
        <Icon value="flags/CZE" data-testid="test" />
      </FoundationProvider>
    );
    expect(
      container.querySelectorAll(`[data-testid="${appendSuffix('icon', 'test')}"]`)
    ).toHaveLength(1);
  });
});
