import { useId } from 'react';

import { not } from 'ramda';

import { FormControlProps } from '../../../types/FormControlProps';
import { HelperText } from '../../HelperText/HelperText';
import { Label } from '../../Label/Label';
import { PlatformInputElement } from '../TextInput/components/PlatformInputElement';
import { PlatformInputWrapper } from '../TextInput/components/PlatformInputWrapper';
import { HTMLAutocomplete } from '../TextInput/HTMLAutocomplete';
import { TestIdProps } from '../../../types/TestIdProps';
import { VStack } from '../../layout/VStack/VStack';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Hide } from '../../Hide/Hide';
import { Space } from '../../layout/Space/Space';
import { Show } from '../../Show/Show';
import { Icon } from '../../Icon/Icon';
import { useToggle } from '../../../hooks/useToggle';

export interface PasswordInputProps
  extends FormControlProps<string | null>,
    TestIdProps {
  autoComplete?: HTMLAutocomplete;
  isRecommended?: boolean;
}

export function PasswordInput(props: PasswordInputProps) {
  const [isPasswordVisible, toggleVisibility] = useToggle();

  const id = useId();

  const isInvalid = props.isInvalid || !!props.errorMessage;

  return (
    <VStack>
      <Label
        id={id}
        isRequired={props.isRequired}
        tooltip={props.tooltip}
        isRecommended={props.isRecommended}
        data-testid={suffixTestId('label', props)}
      >
        {props.label}
      </Label>
      <PlatformInputWrapper
        isDisabled={props.isDisabled}
        isInvalid={isInvalid}
        isRecommended={props.isRecommended}
      >
        <PlatformInputElement
          {...props}
          id={id}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          autoComplete={props.autoComplete}
          isInvalid={isInvalid}
          isDisabled={!!props.isDisabled}
          type={isPasswordVisible ? 'text' : 'password'}
          data-testid={suffixTestId('passwordInput', props)}
        />
        <Hide when={props.isDisabled}>
          <Space horizontal={2} />
          <Show when={isPasswordVisible}>
            <Icon
              size={4}
              value="action/visibility_off"
              onClick={toggleVisibility}
              data-testid={suffixTestId('HideButton', props)}
            />
          </Show>
          <Show when={not(isPasswordVisible)}>
            <Icon
              size={4}
              value="action/visibility"
              onClick={toggleVisibility}
              data-testid={suffixTestId('ShowButton', props)}
            />
          </Show>
        </Hide>
      </PlatformInputWrapper>
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
