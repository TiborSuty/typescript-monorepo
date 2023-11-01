import {Show} from './Show';

export default {
  title: 'Foundation/Show',
  component: Show,
};

export function Default() {
  return <Show>Conditionally rendered content</Show>;
}

export function Expression() {
  return (
    <>
      <Show when={5 > 1}>This will be rendered</Show>
      <Show when={1 > 5}>This will not</Show>
    </>
  );
}

export function Boolean() {
  return (
    <>
      <Show when={true}>This will be rendered</Show>
      <Show when={false}>This will not</Show>
    </>
  );
}

export function AnyValue() {
  return (
    <>
      <Show when={5}>This will be rendered</Show>
      <Show when="test">This will be rendered</Show>
      <Show when={{}}>This will be rendered</Show>
      <Show when={0}>This will also be rendered</Show>
      <Show when={null}>This will not</Show>
      <Show when={undefined}>This will also not</Show>
    </>
  );
}

export function Responsive() {
  return (
    <>
      <Show onMobile>This is visible only on mobile</Show>
      <Show onTablet>This is visible only on tablet</Show>
      <Show onNotebook>This is visible only on notebook</Show>
      <Show onDesktop>This is visible only on desktop</Show>
    </>
  );
}
