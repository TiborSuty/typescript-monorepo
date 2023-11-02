import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';

export const isMenuItemActive = (url: string, path: string) => {
  const rootPath = path.substring(1).includes('/')
    ? path.substring(0, path.substring(1).indexOf('/') + 1)
    : path;

  return rootPath === '/' ? url === '/' : url.startsWith(rootPath);
};

export function useActiveMenuItem(path: string) {
  const location = useLocation();

  const isActive = useMemo(
    () => isMenuItemActive(location.pathname, path),
    [location.pathname, path]
  );

  return [isActive];
}
