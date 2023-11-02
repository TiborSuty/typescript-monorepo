import {isSameDay, isSameMonth, isToday as dateFnsIsToday} from 'date-fns';
import {TextColor, GridItem, Text} from 'platform/foundation';
import styled from 'styled-components';

import {NullishBoolean} from 'shared';

import {CalendarFormValue} from '../../types';

interface DayProps {
  date: Date;
  selectedDate: CalendarFormValue;
  activeMonth: Date;
  isDisabled?: boolean;
  isHovered?: boolean;
  onSelectDate?: (date: Date) => void;
  onHover?: (date: Date) => void;
}

export function Day(props: DayProps) {
  const isSelected = Array.isArray(props.selectedDate)
    ? (props.selectedDate[0] && isSameDay(props.selectedDate[0], props.date)) ||
      (props.selectedDate[1] && isSameDay(props.selectedDate[1], props.date))
    : props.selectedDate && isSameDay(props.selectedDate, props.date);

  const isToday = dateFnsIsToday(props.date);
  const isDifferentMonth = !isSameMonth(props.date, props.activeMonth);

  const color: TextColor | undefined = isDifferentMonth
    ? 'tertiary'
    : isSelected
    ? 'white'
    : isToday || props.isHovered
    ? 'link'
    : props.isDisabled
    ? 'tertiary'
    : undefined;

  return (
    <GridItem>
      <Content
        isDifferentMonth={isDifferentMonth}
        isDisabled={props.isDisabled}
        isSelected={isSelected}
        isHovered={props.isHovered}
        onClick={props.isDisabled ? undefined : () => props.onSelectDate?.(props.date)}
        onMouseEnter={() => props.onHover?.(props.date)}
        aria-selected={isSelected ? true : undefined}
        aria-disabled={props.isDisabled ? true : undefined}
      >
        <Text size="small" alternative={isSelected || isToday} color={color}>
          {String(props.date.getDate())}
        </Text>
      </Content>
    </GridItem>
  );
}

interface ContentProps {
  isDifferentMonth?: boolean;
  isSelected?: NullishBoolean;
  isHovered?: boolean;
  isDisabled?: boolean;
}

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: ${(props) => props.theme.getSize(1)};
  padding: ${(props) => props.theme.getSize(2)} 0;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  background-color: ${(props) => {
    if (props.isDifferentMonth) return props.theme.colors.general.white;
    if (props.isSelected) return props.theme.colors.palettes.blue[60][100];
    if (props.isHovered) return props.theme.colors.palettes.blue[10][100];
  }};

  &:hover {
    background-color: ${(props) =>
      !props.isDisabled && !props.isSelected && props.theme.colors.palettes.blue[10][100]};
  }
`;
