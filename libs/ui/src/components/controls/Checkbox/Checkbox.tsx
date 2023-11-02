import styled from 'styled-components';

import { ChangeEvent, useId } from 'react';

import { defaultTo } from 'ramda';

import { CheckboxPropsBase } from './types';
import { FormControlProps } from '../../../types/FormControlProps';
import { TestIdProps } from '../../../types/TestIdProps';
import { ThemeIconKey } from '../../../theme/theme';
import { getDataAttribute } from '../../../utils/getDataAttribute';
import { VStack } from '../../layout/VStack/VStack';
import { suffixTestId } from '../../../utils/suffixTestId';
import { HStack } from '../../layout/HStack/HStack';
import { Show } from '../../Show/Show';
import { Box } from '../../layout/Box/Box';
import { Icon } from '../../Icon/Icon';
import { Text } from '../../Text/Text';
import { HelperText } from '../../HelperText/HelperText';

export interface CheckboxProps
  extends CheckboxPropsBase,
    FormControlProps<boolean>,
    TestIdProps {
  isIndeterminate?: boolean;
  indeterminateIcon?: ThemeIconKey;
}

export function Checkbox(props: CheckboxProps) {
  const id = useId();

  const indeterminateIcon = defaultTo('toggle/minus', props.indeterminateIcon);
  const checkedIcon = defaultTo('toggle/tick', props.checkedIcon);

  const isInvalid = props.isInvalid || !!props.errorMessage;
  const icon = props.isIndeterminate ? indeterminateIcon : checkedIcon;
  const shouldIconShow = props.value || props.isIndeterminate;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.isDisabled) {
      event.preventDefault();
      return;
    }

    props.onChange?.(!props.value, event);
  };

  const rootProps = {
    'data-disabled': getDataAttribute(props.isDisabled),
    'data-checked': getDataAttribute(props.value),
    'data-invalid': getDataAttribute(isInvalid),
  };

  const checkboxProps = {
    'data-checked': getDataAttribute(props.value && !props.isIndeterminate),
    'data-disabled': getDataAttribute(props.isDisabled),
    'data-invalid': getDataAttribute(isInvalid),
    'data-indeterminate': getDataAttribute(
      props.isIndeterminate && !props.value
    ),
  };

  return (
    <VStack>
      <CheckboxWrapper
        {...rootProps}
        data-testid={suffixTestId('checkbox', props)}
      >
        <HStack>
          <CheckboxInput
            id={id}
            type="checkbox"
            checked={props.value}
            onChange={handleChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            disabled={props.isDisabled}
            required={props.isRequired}
            data-testid={suffixTestId('checkboxInput', props)}
          />
          <CheckboxControl
            {...checkboxProps}
            data-testid={suffixTestId('checkboxControl', props)}
          >
            <Show when={shouldIconShow}>
              <Box flex={0} padding={0}>
                <Icon value={icon} size={3} />
              </Box>
            </Show>
          </CheckboxControl>
          <Show when={props.label}>
            <Box paddingLeft={3}>
              <Text
                size="small"
                data-testid={suffixTestId('checkboxLabel', props)}
              >
                {props.label}
              </Text>
            </Box>
          </Show>
        </HStack>
      </CheckboxWrapper>
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

// eslint-disable-next-line eag/no-css-property
const CheckboxWrapper = styled.label`
  position: relative;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxControl = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;
  width: ${({ theme }) => theme.getSize(5)};
  height: ${({ theme }) => theme.getSize(5)};
  background-color: ${({ theme }) => theme.colors.palettes.white[10][100]};
  color: ${({ theme }) => theme.colors.palettes.white[10][100]};
  border-color: ${({ theme }) => theme.colors.palettes.neutral[200][100]};
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.radii.border_radius_2};
  transition: box-shadow 200ms linear;

  &:active {
    box-shadow: ${({ theme }) => theme.shadows.active};
  }

  &[data-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.severity.danger};
  }

  &[data-disabled='true'] {
    opacity: 0.4;
  }

  &[data-checked='true'] {
    background-color: ${({ theme }) => theme.colors.general.accent};
    border-color: ${({ theme }) => theme.colors.general.accent};

    &[data-invalid='true'] {
      border-color: ${({ theme }) => theme.colors.severity.danger};
    }

    &[data-disabled='true'] {
      opacity: 0.4;
    }
  }

  &[data-indeterminate='true'] {
    background-color: ${({ theme }) => theme.colors.general.accent};
    border-color: ${({ theme }) => theme.colors.general.accent};

    &[data-invalid='true'] {
      border-color: ${({ theme }) => theme.colors.severity.danger};
    }

    &[data-disabled='true'] {
      opacity: 0.4;
      background-color: ${({ theme }) => theme.colors.general.accent};
      border-color: ${({ theme }) => theme.colors.general.accent};
    }
  }
`;
