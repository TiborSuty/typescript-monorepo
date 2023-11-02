import styled, { keyframes } from 'styled-components';
import { match } from 'ts-pattern';

import { useLayoutEffect, useRef } from 'react';

import { always } from 'ramda';
import { TestIdProps } from '../../types/TestIdProps';
import { getSize } from '../../utils/getSize';
import { foundationTheme } from '../../theme/theme';
import { Show } from '../Show/Show';
import { Hide } from '../Hide/Hide';
import { Box } from '../layout/Box/Box';

export type SpinnerSize = 'large' | 'default' | 'small' | 'xSmall' | undefined;
type SpinnerVariant = 'default' | 'overlay' | undefined;
type SpinnerColorScheme = 'white' | 'blue' | undefined;

export interface SpinnerProps extends TestIdProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  colorScheme?: SpinnerColorScheme;
}

export function Spinner(props: SpinnerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const { current: wrapper } = ref;
    const parent = wrapper?.parentElement;

    if (!parent) return;

    parent.setAttribute('data-loading', 'true');

    return () => {
      parent.removeAttribute('data-loading');
    };
  }, []);

  const size = match<SpinnerSize, string>(props.size)
    .with('xSmall', always(getSize(3)))
    .with('small', always(getSize(4)))
    .with('large', always(getSize(16)))
    .otherwise(always(getSize(8)));

  const colorScheme = match<SpinnerColorScheme, string>(props.colorScheme)
    .with('white', always(foundationTheme.colors.palettes.white[10][100]))
    .otherwise(always(foundationTheme.colors.palettes.blue[60][100]));

  const borderWidth = match<SpinnerSize, string>(props.size)
    .with('xSmall', always('1.5px'))
    .with('small', always('2.5px'))
    .with('large', always('10px'))
    .otherwise(always('5px'));

  return (
    <>
      <Show when={props.variant === 'overlay'}>
        <SpinnerOverlay ref={ref}>
          <SpinnerIcon
            size={size}
            colorScheme={colorScheme}
            borderWidth={borderWidth}
          />
        </SpinnerOverlay>
      </Show>

      <Hide when={props.variant === 'overlay'}>
        <Box ref={ref}>
          <SpinnerIcon
            size={size}
            colorScheme={colorScheme}
            borderWidth={borderWidth}
          />
        </Box>
      </Hide>
    </>
  );
}

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const SpinnerOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.palettes.white[10][80]};
`;

const SpinnerIcon = styled.div<{
  size: string;
  colorScheme: string;
  borderWidth: string;
}>`
  display: block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-color: ${(props) => props.colorScheme};
  border-bottom-color: ${({ theme }) => theme.colors.general.transparent};
  border-left-color: ${({ theme }) => theme.colors.general.transparent};
  border-style: solid;
  border-radius: ${({ theme }) => theme.radii.circular};
  border-width: ${(props) => props.borderWidth};
  color: ${(props) => props.colorScheme};
  animation: ${spinAnimation} 450ms linear infinite;
`;
