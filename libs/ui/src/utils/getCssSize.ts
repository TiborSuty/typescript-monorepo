import { isNumber } from 'ramda-adjunct';

import { CSSDimension } from '../types/CSSDimension';
import { Integer } from '../types/Integer';
import { getSize } from './getSize';

export const getCssSize = (size: CSSDimension | Integer | undefined) =>
  isNumber(size) ? getSize(size) : size;
