import { DefaultTheme } from 'styled-components';

import { isNil, path, split } from 'ramda';

import { ThemeColorPath } from '../theme/theme';
import { Nullish } from '../types/Nullish';

export function getColorByPath(
  color: ThemeColorPath | Nullish,
  theme: DefaultTheme
): string | undefined {
  if (isNil(color)) return undefined;
  return path(split('.', color), theme.colors);
}
