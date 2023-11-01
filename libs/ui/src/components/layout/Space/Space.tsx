import { css } from 'styled-components';
import { Integer } from '../../../types/Integer';
import { ValueByDevice } from '../../../types/ValueByDevice';
import { getSize } from '../../../utils/getSize';
import { useResponsivePropValue } from '../../../hooks/useResponsivePropValue';

export interface SpaceProps {
  vertical?: Integer | ValueByDevice<Integer> | null;
  horizontal?: Integer | ValueByDevice<Integer> | null;
  fillAvailable?: boolean;
  max?: Integer;
}

export function Space(props: SpaceProps) {
  const max = props.max ? getSize(props.max) : 'initial';
  const horizontal = useResponsivePropValue(props.horizontal);
  const vertical = useResponsivePropValue(props.vertical);

  return (
    <div
      aria-hidden="true"
      css={css`
        user-select: none;
        pointer-events: none;
        outline: none;
        width: ${getSize(horizontal ?? 0)};
        height: ${getSize(vertical ?? 0)};
        max-width: ${max};
        max-height: ${max};
        flex-grow: ${props.fillAvailable ? 1 : 0};
        flex-shrink: ${props.fillAvailable ? 1 : 0};
        flex-basis: auto;
      `}
    />
  );
}
