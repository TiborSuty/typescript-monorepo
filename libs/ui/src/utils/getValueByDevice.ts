import { match } from 'ts-pattern';
import { always } from 'ramda';
import { Device } from '../types/device';

/**
 * Returns a value based on the provided device type.
 *
 * @param {M} mobileValue - The value to return if the device is 'mobile'.
 * @param {T} tabletValue - The value to return if the device is 'tablet'.
 * @param {N} notebookValue - The value to return if the device is 'notebook'.
 * @param {D} desktopValue - The value to return if the device is 'desktop'.
 * @param {Device} device - The type of device, which should be one of 'mobile', 'tablet', 'notebook', or 'desktop'.
 *
 * @returns {M | T | N | D} The value associated with the given device type.
 *
 * @example
 * const value = getValueByDevice('Hello Mobile', 'Hello Tablet', 'Hello Notebook', 'Hello Desktop', 'tablet');
 * console.log(value); // 'Hello Tablet'
 */
export function getValueByDevice<
  M = string | number,
  T = string | number,
  N = string | number,
  D = string | number
>(
  mobileValue: M,
  tabletValue: T,
  notebookValue: N,
  desktopValue: D,
  device: Device
): M | T | N | D {
  return match(device)
    .with('mobile', always(mobileValue))
    .with('tablet', always(tabletValue))
    .with('notebook', always(notebookValue))
    .with('desktop', always(desktopValue))
    .exhaustive();
}
