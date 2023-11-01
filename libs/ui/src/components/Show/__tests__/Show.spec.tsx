import {render} from '@testing-library/react';

import {FoundationProvider} from '../../FoundationProvider/FoundationProvider';
import {Show} from '../Show';

describe('Show component', () => {
  it('shows content without specified condition', () => {
    const {container} = render(
      <FoundationProvider>
        <Show>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it('shows content when expression is true', () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={5 > 1}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it('shows content when value is truthy', () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={5}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it('shows content when value is not null, false, or when is not defined', () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={0}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it("doesn't show content when value is undefined", () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={undefined}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it("doesn't show content when expression is false", () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={1 > 5}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it("doesn't show content when value is false", () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={false}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it("doesn't show content when value is null", () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={null}>
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(0);
  });

  it('accepts multiple child elements', () => {
    const {container} = render(
      <FoundationProvider>
        <Show when={true}>
          <div />
          <div />
        </Show>
      </FoundationProvider>
    );
    expect(container.querySelectorAll('div')).toHaveLength(2);
  });
});
