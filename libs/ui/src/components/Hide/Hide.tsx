import { match, Pattern } from 'ts-pattern';

import { ReactNode } from 'react';

import { always, has } from 'ramda';
import { useDevice } from '../providers/DeviceProvider/DeviceProvider';

export interface HideProps {
  when?: unknown;
  children: ReactNode | ReactNode[];
  onMobile?: true;
  onTablet?: true;
  onNotebook?: true;
  onDesktop?: true;
}

export function Hide(props: HideProps) {
  const hasWhen = has('when', props);
  const hideOnMobile = has('onMobile', props) && !!props.onMobile;
  const hideOnTablet = has('onTablet', props) && !!props.onTablet;
  const hideOnNotebook = has('onNotebook', props) && !!props.onNotebook;
  const hideOnDesktop = has('onDesktop', props) && !!props.onDesktop;
  const isResponsive =
    hideOnMobile || hideOnTablet || hideOnNotebook || hideOnDesktop;

  const device = useDevice();

  const isHidden = match([isResponsive, device, props])
    .with([false, Pattern.any, Pattern.any], always(false))
    .with([true, 'mobile', { onMobile: true }], always(true))
    .with([true, 'tablet', { onTablet: true }], always(true))
    .with([true, 'notebook', { onNotebook: true }], always(true))
    .with([true, 'desktop', { onDesktop: true }], always(true))
    .otherwise(always(false));

  if (isHidden) return null;

  if (!!props.when) return null;

  return <>{props.children}</>;
}
