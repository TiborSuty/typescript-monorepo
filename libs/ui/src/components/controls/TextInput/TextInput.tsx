import { useId } from 'react';

import { PlatformInputElement } from './components/PlatformInputElement';
import { PlatformInputWrapper } from './components/PlatformInputWrapper';
import { HTMLAutocomplete } from './HTMLAutocomplete';
import { Nullish } from '../../../types/Nullish';
import { ThemeIconKey } from '../../../theme/theme';
import { TestIdProps } from '../../../types/TestIdProps';
import { FormControlProps } from '../../../types/FormControlProps';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Show } from '../../Show/Show';
import { Icon } from '../../Icon/Icon';
import { Text } from '../../Text/Text';
import { VStack } from '../../layout/VStack/VStack';
import { Space } from '../../layout/Space/Space';
import { Label } from '../../Label/Label';
import { HelperText } from '../../HelperText/HelperText';

export interface TextInputProps
  extends FormControlProps<string | null>,
    TestIdProps {
  isAutoFocused?: boolean;
  autoComplete?: HTMLAutocomplete;
  placeholder?: string | Nullish;
  type?: string;
  maxLength?: number;
  onClick?: VoidFunction;
  leftIcon?: ThemeIconKey;
  suffix?: string | Nullish;
  isCounterVisible?: boolean;
  isRecommended?: boolean;
}

export function TextInput(props: TextInputProps) {
  const id = useId();

  const isInvalid = props.isInvalid || !!props.errorMessage;

  return (
    <VStack>
      <Label
        id={id}
        maxLength={props.maxLength}
        currentLength={props.value?.length}
        isCounterVisible={props.isCounterVisible}
        isRequired={props.isRequired}
        tooltip={props.tooltip}
        isRecommended={!!props.isRecommended}
        data-testid={suffixTestId('label', props)}
      >
        {props.label}
      </Label>
      <PlatformInputWrapper
        onClick={props.onClick}
        isDisabled={props.isDisabled}
        isInvalid={isInvalid}
        isRecommended={!!props.isRecommended}
      >
        <Show when={props.leftIcon}>
          <Icon value={props.leftIcon} size={4} />
          <Space horizontal={2} />
        </Show>
        <PlatformInputElement
          id={id}
          autoComplete={props.autoComplete}
          type={props.type}
          maxLength={props.maxLength}
          name={props.name}
          isInvalid={isInvalid}
          isRequired={props.isRequired}
          isDisabled={!!props.isDisabled}
          placeholder={props.placeholder}
          isAutoFocused={props.isAutoFocused}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          value={props.value}
          data-testid={props['data-testid']}
        />
        <Show when={props.suffix}>
          <Space horizontal={2} />
          <Text size="small" color="secondary">
            {props.suffix}
          </Text>
        </Show>
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
