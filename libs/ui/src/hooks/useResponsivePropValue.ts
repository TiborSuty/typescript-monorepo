import { getValueByDevice } from '../utils/getValueByDevice';
import { useDevice } from '../components/providers/DeviceProvider/DeviceProvider';
import { ValueByDevice } from '../types/ValueByDevice';

type PrimitiveValue<T> = T extends ValueByDevice<infer P>
  ? P
  : Exclude<T, Array<unknown>>;

/**
 * Platform internal tool to handle possible responsive props like spacing?: Integer | ValueByDevice<Integer>;
 */
export function useResponsivePropValue<T>(value: T): PrimitiveValue<T> {
  const device = useDevice();

  if (Array.isArray(value) && value.length === 4) {
    return getValueByDevice(value[0], value[1], value[2], value[3], device);
  } else {
    return value as PrimitiveValue<T>;
  }
}
