import { ReactNode } from 'react';

import { isNil } from 'ramda';

import { getJustifyFromAlign } from '../../utils/getJustifyFromAlign';
import { Button, ButtonProps } from '../Button/Button';
import { TestIdProps } from '../../types/TestIdProps';
import { suffixTestId } from '../../utils/suffixTestId';
import { HStack } from '../layout/HStack/HStack';
import { AlignType } from '../../types/Align';

export type ChildrenButtonGroupProps = {
  buttons?: undefined;
  children: ReactNode;
};

export type PropButtonGroupProps = {
  buttons?: ButtonProps[];
  children?: undefined;
};

export type ButtonGroupProps = (
  | ChildrenButtonGroupProps
  | PropButtonGroupProps
) &
  Omit<Partial<ButtonProps>, 'onClick' | 'children'> &
  TestIdProps & {
    align?: AlignType;
  };

export function ButtonGroup(props: ButtonGroupProps) {
  const { buttons, children, 'data-testid': _, ...overrides } = props;

  if (isNil(children ?? buttons)) return null;

  return (
    <HStack
      role="group"
      spacing={2}
      justify={getJustifyFromAlign(props.align)}
      data-testid={suffixTestId('buttonGroup', props)}
    >
      {children ??
        buttons?.map((buttonProps: ButtonProps, index) => (
          <Button
            data-testid={suffixTestId(`buttonGroup-button-[${index}]`, props)}
            key={buttonProps.title}
            {...buttonProps}
            {...overrides}
          />
        ))}
    </HStack>
  );
}
