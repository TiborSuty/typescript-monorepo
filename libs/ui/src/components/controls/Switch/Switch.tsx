import styled from 'styled-components';

import { ChangeEvent, useId } from 'react';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { suffixTestId } from '../../../utils/suffixTestId';
import { VStack } from '../../layout/VStack/VStack';
import { Show } from '../../Show/Show';
import { Text } from '../../Text/Text';
import { HelperText } from '../../HelperText/HelperText';
import { Box } from '../../layout/Box/Box';
import { getDataAttribute } from '../../../utils/getDataAttribute';

export interface SwitchProps extends FormControlProps<boolean>, TestIdProps {}

export function Switch(props: SwitchProps) {
  const id = useId();

  const isInvalid = props.isInvalid || !!props.errorMessage;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.isDisabled) {
      event.preventDefault();
      return;
    }

    props.onChange?.(!props.value);
  };

  const rootProps = {
    'data-disabled': getDataAttribute(props.isDisabled),
    'data-checked': getDataAttribute(props.value),
    'data-invalid': getDataAttribute(isInvalid),
  };

  const checkboxProps = {
    'data-checked': getDataAttribute(props.value),
    'data-disabled': getDataAttribute(props.isDisabled),
    'data-invalid': getDataAttribute(isInvalid),
  };

  return (
    <VStack>
      <SwitchWrapper
        {...rootProps}
        data-testid={suffixTestId('switchWrapper', props)}
      >
        <SwitchInput
          id={id}
          type="checkbox"
          checked={props.value}
          onChange={handleChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          disabled={props.isDisabled}
          required={props.isRequired}
          data-testid={suffixTestId('switchInput', props)}
        />
        <SwitchTrack
          {...checkboxProps}
          data-testid={suffixTestId('switchTrack', props)}
        >
          <SwitchThumb
            data-checked={getDataAttribute(props.value)}
            data-testid={suffixTestId('switchThumb', props)}
          />
        </SwitchTrack>
        {props.label && (
          <Box paddingLeft={3}>
            <Text size="small" data-testid={suffixTestId('label', props)}>
              {props.label}
            </Text>
          </Box>
        )}
      </SwitchWrapper>

      <Show when={props.errorMessage ?? props.helperText}>
        <HelperText
          errorMessage={props.errorMessage}
          helperText={props.helperText}
          data-testid={suffixTestId('helper', props)}
        />
      </Show>
    </VStack>
  );
}

const SwitchWrapper = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

const SwitchInput = styled.input`
  display: none;
`;

// Disabled warning for px units because we can't get 2px from theme.getSize. Minimum padding we can get is 4px.
// eslint-disable-next-line eag/no-css-property
const SwitchTrack = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: flex-start;
  box-sizing: content-box;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.border_radius_4};
  padding: 2px;
  width: ${({ theme }) => theme.getSize(8)};
  height: ${({ theme }) => theme.getSize(4)};
  transition: 150ms;
  background-color: ${({ theme }) =>
    theme.components.Switch.trackStyle.backgroundColor};

  &[data-checked='true'] {
    background-color: ${({ theme }) => theme.colors.general.accent};
  }

  &[data-disabled='true'] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const SwitchThumb = styled.span`
  background: ${({ theme }) => theme.colors.general.white};
  transition: transform 200ms;
  width: ${({ theme }) => theme.getSize(4)};
  height: ${({ theme }) => theme.getSize(4)};
  border-radius: ${({ theme }) => theme.radii.border_radius_4};
  box-shadow: ${({ theme }) => theme.shadows.elevation_1};

  &[data-checked='true'] {
    transform: translateX(${({ theme }) => theme.getSize(4)});
  }
`;
