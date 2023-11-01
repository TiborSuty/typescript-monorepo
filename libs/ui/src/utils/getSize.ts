import {Integer} from '../types/Integer';

export function getSize(size?: Integer): string {
  if (size === 0) return '0';
  return size ? `calc(var(--eag-space-step) * ${size}rem)` : 'initial';
}
