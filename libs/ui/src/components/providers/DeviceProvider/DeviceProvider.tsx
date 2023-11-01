import { useTheme } from 'styled-components';

import { ReactNode, useLayoutEffect, useState } from 'react';

import { find, pathEq, toPairs } from 'ramda';

import { Device } from '../../../types/device';
import { createContext } from '../../../utils/createContext';
import { DefaultFoundationTheme } from '../../../theme/theme';

type DeviceProviderProps = {
  children: ReactNode;
};

const [DeviceContextProvider, useDevice] = createContext<Device>({
  strict: true,
  name: 'DeviceProvider',
});

export { useDevice };

export function DeviceProvider(props: DeviceProviderProps) {
  const theme = useTheme();
  const [currentDevice, setCurrentDevice] = useState<Device>(() =>
    getCurrentDevice(theme)
  );

  useLayoutEffect(() => {
    const mediaQueryLists = toPairs(theme.devices).map(
      ([device, mediaQuery]) => ({
        device,
        queryList: window.matchMedia?.(mediaQuery),
        listener: (event: MediaQueryListEvent) => {
          if (event.matches) setCurrentDevice(device);
        },
      })
    );

    mediaQueryLists.forEach((deviceQueryList) => {
      if (isAddEventListenerSupported) {
        deviceQueryList.queryList?.addEventListener?.(
          'change',
          deviceQueryList.listener
        );
      } else {
        deviceQueryList.queryList?.addListener?.(deviceQueryList.listener);
      }
    });

    return () => {
      mediaQueryLists.forEach((deviceQueryList) => {
        if (isAddEventListenerSupported) {
          deviceQueryList.queryList?.removeEventListener?.(
            'change',
            deviceQueryList.listener
          );
        } else {
          deviceQueryList.queryList?.removeListener?.(deviceQueryList.listener);
        }
      });
    };
  }, [theme]);

  return (
    <DeviceContextProvider value={currentDevice}>
      {props.children}
    </DeviceContextProvider>
  );
}

/**
 * @about
 * addListener is already deprecated in favor of addEventListener.
 * However, some older versions of Safari are still using it.
 */
const isAddEventListenerSupported = !!window.matchMedia?.(
  '(min-width: 123px) and (max-width: 456px)'
)?.addEventListener;

const getCurrentDevice = (theme: DefaultFoundationTheme): Device => {
  const mediaQueryLists = toPairs(theme.devices).map(
    ([device, mediaQuery]) => ({
      device,
      queryList: window.matchMedia?.(mediaQuery),
    })
  );

  const matched = find(pathEq(true, ['queryList', 'matches']), mediaQueryLists);
  return matched?.device ?? 'desktop';
};
