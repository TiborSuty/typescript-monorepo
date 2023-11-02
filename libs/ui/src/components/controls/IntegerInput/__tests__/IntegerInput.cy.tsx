import {useState} from 'react';

import {ComponentsProvider} from '../../ComponentsProvider/ComponentsProvider';
import {IntegerInput, IntegerInputProps} from '../IntegerInput';

const IntegerInputTest = (props: Partial<IntegerInputProps>) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ComponentsProvider language="cs">
      <IntegerInput
        value={value}
        onChange={setValue}
        data-testid="cypress-integerInput"
        {...props}
      />
    </ComponentsProvider>
  );
};

const integerInput = {
  type: (value: string | number) => cy.get('input').type(value.toString()),
  clear: () => cy.get('input').clear(),
  increment: () =>
    cy.get('[data-testid="cypress-integerInput-numberButtonPlus-iconButton"]').click(),
  decrement: () =>
    cy.get('[data-testid="cypress-integerInput-numberButtonMinus-iconButton"]').click(),
  checkValue: (value: string) => cy.get('input').should('have.value', value),
};

describe('IntegerInput', () => {
  it('should type all allowed characters', () => {
    cy.mount(<IntegerInputTest />);

    integerInput.type(1234567890);
    integerInput.checkValue('1 234 567 890');
    integerInput.clear();

    integerInput.type(3.1459);
    integerInput.checkValue('31 459');
    integerInput.clear();

    integerInput.type('QWERTZ');
    integerInput.checkValue('');
  });

  it('should increment and decrement by default value (1)', () => {
    cy.mount(<IntegerInputTest isStepperVisible />);

    integerInput.type(10);
    integerInput.checkValue('10');

    integerInput.increment();
    integerInput.checkValue('11');
    integerInput.increment();
    integerInput.checkValue('12');
    integerInput.increment();
    integerInput.checkValue('13');

    integerInput.decrement();
    integerInput.checkValue('12');
    integerInput.decrement();
    integerInput.checkValue('11');
    integerInput.decrement();
    integerInput.checkValue('10');
  });

  it('should increment and decrement by default value (1) and limit by min and max', () => {
    cy.mount(<IntegerInputTest isStepperVisible min={10} max={15} />);

    integerInput.type(11);
    integerInput.checkValue('11');

    integerInput.decrement();
    integerInput.checkValue('10');

    integerInput.decrement();
    integerInput.checkValue('10');

    integerInput.decrement();
    integerInput.checkValue('10');

    integerInput.clear();
    integerInput.type(14);
    integerInput.checkValue('14');

    integerInput.increment();
    integerInput.checkValue('15');

    integerInput.increment();
    integerInput.checkValue('15');

    integerInput.increment();
    integerInput.checkValue('15');
  });

  it('should increment and decrement by custom step', () => {
    cy.mount(<IntegerInputTest isStepperVisible step={2} />);

    integerInput.type(10);
    integerInput.checkValue('10');

    integerInput.increment();
    integerInput.checkValue('12');
    integerInput.increment();
    integerInput.checkValue('14');
    integerInput.increment();
    integerInput.checkValue('16');

    integerInput.decrement();
    integerInput.checkValue('14');
    integerInput.decrement();
    integerInput.checkValue('12');
    integerInput.decrement();
    integerInput.checkValue('10');
  });

  it('should not display anything when value is null', () => {
    cy.mount(<IntegerInputTest />);

    integerInput.checkValue('');
  });

  it('should not display anything when value is undefined', () => {
    cy.mount(
      <ComponentsProvider language="cs">
        {
          // @ts-ignore
          <IntegerInput value={undefined} />
        }
      </ComponentsProvider>
    );

    integerInput.checkValue('');
  });

  it('should not display anything when value is NaN', () => {
    cy.mount(<IntegerInputTest value={NaN} />);

    integerInput.checkValue('');
  });

  it('should not display anything when value is string', () => {
    // @ts-ignore
    cy.mount(<IntegerInputTest value="TEST" />);

    integerInput.checkValue('');
  });

  it('should correctly change number after moving the cursor', () => {
    cy.mount(<IntegerInputTest />);

    integerInput.type('11{leftarrow}22');
    integerInput.checkValue('1 221');

    integerInput.type('{leftarrow}33');
    integerInput.checkValue('123 321');

    integerInput.type('{leftarrow}44');
    integerInput.checkValue('12 344 321');

    integerInput.type('{backspace}{backspace}');
    integerInput.checkValue('123 321');

    integerInput.type('{rightarrow}{backspace}{backspace}{backspace}{backspace}');
    integerInput.checkValue('321');

    integerInput.type(555);
    integerInput.checkValue('555 321');
  });

  it('should correctly handle negative numbers', () => {
    cy.mount(<IntegerInputTest />);

    integerInput.type('-12345');
    integerInput.checkValue('-12 345');
  });

  it('should correctly handle negative numbers with alternative minus signs', () => {
    cy.mount(<IntegerInputTest />);

    integerInput.type('‐12345');
    integerInput.checkValue('-12 345');
    integerInput.clear();

    integerInput.type('‑12345');
    integerInput.checkValue('-12 345');
    integerInput.clear();

    integerInput.type('−12345');
    integerInput.checkValue('-12 345');
    integerInput.clear();

    integerInput.type('–12345');
    integerInput.checkValue('-12 345');
    integerInput.clear();

    integerInput.type('—12345');
    integerInput.checkValue('-12 345');
  });
});
