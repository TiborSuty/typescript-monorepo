import {isSameDay} from 'date-fns';
import {HStack, VStack} from 'platform/foundation';

import {suffixTestId, TestIdProps} from 'shared';

import {FormControlProps} from '../../../types/FormControlProps';
import {Chip} from '../../Chip/Chip';
import {RelativeDate} from '../RelativeDate';

interface DatePickerRelativeDatesProps extends FormControlProps<Date | null>, TestIdProps {
  relativeDates?: RelativeDate[];
}

export function DatePickerRelativeDates(props: DatePickerRelativeDatesProps) {
  if (!props.relativeDates?.length) {
    return null;
  }

  return (
    <VStack spacing={3} data-testid={suffixTestId('relativeDatesContainer', props)}>
      {props.relativeDates.map((relativeDate) => (
        <HStack key={`${relativeDate.date.toISOString()}-${relativeDate.label}`}>
          <Chip
            label={relativeDate.label}
            value={!!props.value && isSameDay(props.value, relativeDate.date)}
            size="small"
            onChange={() => props.onChange?.(relativeDate.date)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
