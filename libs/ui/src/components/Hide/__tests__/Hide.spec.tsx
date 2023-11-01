import {render} from '@testing-library/react';

import {FoundationProvider} from '../../FoundationProvider/FoundationProvider';
import {Hide} from '../Hide';

describe('<Hide />', () => {
  it('Shows content without specified condition', () => {
    const {container} = render(
      <FoundationProvider>
        <Hide>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it('Hides content when expression is true', () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={5 > 1}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it('Hides content when value is truthy', () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={5}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it('Shows content when value is 0', () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={0}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it("doesn't hide content when value is undefined", () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={undefined}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it("doesn't hide content when expression is false", () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={1 > 5}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it("doesn't hide content when value is false", () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={false}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it("doesn't hide content when value is null", () => {
    const {container} = render(
      <FoundationProvider>
        <Hide when={null}>
          <div />
        </Hide>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });
});
