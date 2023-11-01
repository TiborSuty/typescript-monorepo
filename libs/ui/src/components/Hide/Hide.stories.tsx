import {Hide} from './Hide';

export default {
  title: 'Foundation/Hide',
  component: Hide,
};

export function Default() {
  return <Hide>Content is shown without a condition</Hide>;
}

export function Expression() {
  return (
    <>
      <Hide when={5 > 1}>This will be not rendered</Hide>
      <Hide when={1 > 5}>This will be</Hide>
    </>
  );
}

export function Boolean() {
  return (
    <>
      <Hide when={true}>This will be not rendered</Hide>
      <Hide when={false}>This will be</Hide>
    </>
  );
}

export function AnyValue() {
  return (
    <>
      <Hide when={5}>This will be not rendered</Hide>
      <Hide when="test">This will be not rendered</Hide>
      <Hide when={{}}>This will be not rendered</Hide>
      <Hide when={0}>This will be</Hide>
      <Hide when={null}>This will be</Hide>
      <Hide when={undefined}>This will also be</Hide>
    </>
  );
}

export function Responsive() {
  return (
    <>
      <Hide onTablet onDesktop onNotebook>
        This is visible only on mobile
      </Hide>
      <Hide onMobile onDesktop onNotebook>
        This is visible only on tablet
      </Hide>
      <Hide onMobile onTablet onDesktop>
        This is visible only on notebook
      </Hide>
      <Hide onMobile onTablet onNotebook>
        This is visible only on desktop
      </Hide>
    </>
  );
}
