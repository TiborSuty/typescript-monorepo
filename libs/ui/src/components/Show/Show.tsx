import { match, Pattern } from 'ts-pattern';

import { ReactNode } from 'react';

import { always, has, not } from 'ramda';

import { useDevice } from '../providers/DeviceProvider/DeviceProvider';

interface ShowProps {
  when?: unknown;
  children: ReactNode | ReactNode[];
  onMobile?: true;
  onTablet?: true;
  onNotebook?: true;
  onDesktop?: true;
}

export function Show(props: ShowProps) {
  const hasWhen = has('when', props);
  const showOnMobile = has('onMobile', props) && !!props.onMobile;
  const showOnTablet = has('onTablet', props) && !!props.onTablet;
  const showOnNotebook = has('onNotebook', props) && !!props.onNotebook;
  const showOnDesktop = has('onDesktop', props) && !!props.onDesktop;
  const isResponsive =
    showOnMobile || showOnTablet || showOnNotebook || showOnDesktop;

  const device = useDevice();

  const isVisible = match([isResponsive, device, props])
    .with([false, Pattern.any, Pattern.any], always(true))
    .with([true, 'mobile', { onMobile: true }], always(true))
    .with([true, 'tablet', { onTablet: true }], always(true))
    .with([true, 'notebook', { onNotebook: true }], always(true))
    .with([true, 'desktop', { onDesktop: true }], always(true))
    .otherwise(always(false));

  if (not(isVisible)) return null;

  if (
    props.when === null ||
    (hasWhen && props.when === undefined) ||
    (typeof props.when === 'boolean' && props.when === false)
  ) {
    return null;
  }

  return <>{props.children}</>;
}
