import { css } from 'styled-components';

import { append, without } from 'ramda';
import { isPositive } from 'ramda-adjunct';

import { Chip } from './Chip';
import { ChipsOption } from './ChipsOption';
import { FormControlProps } from '../../../types/FormControlProps';
import { Nullish } from '../../../types/Nullish';
import { TestIdProps } from '../../../types/TestIdProps';
import { suffixTestId } from '../../../utils/suffixTestId';
import { Center } from '../../layout/Center/Center';
import { Show } from '../../Show/Show';
import { HelperText } from '../../HelperText/HelperText';
import { HStack } from '../../layout/HStack/HStack';
import { Icon } from '../../Icon/Icon';
import { VStack } from '../../layout/VStack/VStack';
import { Label } from '../../Label/Label';
import { useBoolean } from '../../../hooks/useBoolean';

export interface ChipsProps
  extends FormControlProps<string[] | Nullish>,
    TestIdProps {
  size?: 'small' | 'default';
  options: ChipsOption[];
  isDeselectable?: boolean;
  variant?: 'default' | 'ghost';
  isMultiple?: boolean;
  /**
   * @about
   * If is defined, only limit number of Chips is shown. Is possible show other
   * remaining chips by load more button.
   */
  limit?: number;
}

export function Chips(props: ChipsProps) {
  const [showAll, showAllOptions] = useBoolean();

  const handleChange = (selectedValue: string) => {
    if (!props.isMultiple) {
      const nextValue = props.isDeselectable
        ? selectedValue !== props.value?.[0]
          ? [selectedValue]
          : []
        : [selectedValue];

      props.onChange?.(nextValue);
      return;
    }

    const isSelected = !!props.value?.includes(selectedValue);

    const nextValue = !isSelected
      ? append(selectedValue, props.value ?? [])
      : without([selectedValue], props.value ?? []);

    props.onChange?.(nextValue);
  };

  const showAllChipSize = props.size === 'small' ? 6 : 8;

  return (
    <VStack>
      <Label
        isRequired={props.isRequired}
        tooltip={props.tooltip}
        data-testid={suffixTestId('label', props)}
      >
        {props.label}
      </Label>

      <HStack
        spacing={2}
        align="center"
        wrap
        data-testid={suffixTestId('chipsWrapper', props)}
      >
        {props.options.map((option, index) => {
          if (!showAll && isPositive(props.limit) && index + 1 > props.limit) {
            return null;
          }

          return (
            <Chip
              key={option.value}
              label={option.label}
              size={props.size}
              variant={props.variant}
              isDisabled={props.isDisabled || option.isDisabled}
              value={!!props.value?.includes(option.value)}
              onChange={() => handleChange(option.value)}
              data-testid={suffixTestId(option.label, props)}
            />
          );
        })}
        {isPositive(props.limit) && !showAll && (
          <button
            onClick={showAllOptions}
            css={css`
              background-color: ${({ theme }) =>
                theme.colors.palettes.neutral['30']['100']};
              border-radius: ${({ theme }) => theme.radii.border_radius_4};
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors.palettes.neutral['40']['100']};
              }
            `}
            data-testid={suffixTestId('loadMoreButton', props)}
          >
            <Center width={showAllChipSize} height={showAllChipSize}>
              <Icon value="navigation/more_horiz" size={4} />
            </Center>
          </button>
        )}
      </HStack>

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
