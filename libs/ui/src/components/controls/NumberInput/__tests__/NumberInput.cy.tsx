import {useState} from 'react';

import {ComponentsProvider} from '../../ComponentsProvider/ComponentsProvider';
import {NumberInput, NumberInputProps} from '../NumberInput';

const NumberInputTest = (props: Partial<NumberInputProps>) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ComponentsProvider language="cs">
      <NumberInput value={value} onChange={setValue} data-testid="cypress-numberInput" {...props} />
    </ComponentsProvider>
  );
};

const numberInput = {
  type: (value: string | number) => cy.get('input').type(value.toString()),
  clear: () => cy.get('input').clear(),
  increment: () =>
    cy.get('[data-testid="cypress-numberInput-numberButtonPlus-iconButton"]').click(),
  decrement: () =>
    cy.get('[data-testid="cypress-numberInput-numberButtonMinus-iconButton"]').click(),
  checkValue: (value: string | null) => cy.get('input').should('have.value', value),
};

describe('numberInput', () => {
  it('should type all allowed characters', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type(1234567890);
    numberInput.checkValue('1 234 567 890');
    numberInput.clear();

    numberInput.type('3,1459');
    numberInput.checkValue('3,1459');
    numberInput.clear();

    numberInput.type('QWERTZ');
    numberInput.checkValue('');
  });

  it('should limit decimal by precision', () => {
    cy.mount(<NumberInputTest decimalPlaces={2} />);

    numberInput.type(12345678990);
    numberInput.checkValue('12 345 678 990');

    numberInput.clear();

    numberInput.type('3,14159');
    numberInput.checkValue('3,14');
  });

  it('should increment and decrement by default value (1)', () => {
    cy.mount(<NumberInputTest isStepperVisible />);

    numberInput.type(10);
    numberInput.checkValue('10');

    numberInput.increment();
    numberInput.checkValue('11');
    numberInput.increment();
    numberInput.checkValue('12');
    numberInput.increment();
    numberInput.checkValue('13');

    numberInput.decrement();
    numberInput.checkValue('12');
    numberInput.decrement();
    numberInput.checkValue('11');
    numberInput.decrement();
    numberInput.checkValue('10');
  });

  it('should increment and decrement by default value (1) and limit by min and max', () => {
    cy.mount(<NumberInputTest isStepperVisible min={10} max={15} />);

    numberInput.type(11);
    numberInput.checkValue('11');

    numberInput.decrement();
    numberInput.checkValue('10');

    numberInput.decrement();
    numberInput.checkValue('10');

    numberInput.decrement();
    numberInput.checkValue('10');

    numberInput.clear();
    numberInput.type(14);
    numberInput.checkValue('14');

    numberInput.increment();
    numberInput.checkValue('15');

    numberInput.increment();
    numberInput.checkValue('15');

    numberInput.increment();
    numberInput.checkValue('15');
  });

  it('should increment and decrement by custom step', () => {
    cy.mount(<NumberInputTest isStepperVisible step={2} />);

    numberInput.type(10);
    numberInput.checkValue('10');

    numberInput.increment();
    numberInput.checkValue('12');
    numberInput.increment();
    numberInput.checkValue('14');
    numberInput.increment();
    numberInput.checkValue('16');

    numberInput.decrement();
    numberInput.checkValue('14');
    numberInput.decrement();
    numberInput.checkValue('12');
    numberInput.decrement();
    numberInput.checkValue('10');
  });

  it('should increment and decrement by custome decimal step', () => {
    cy.mount(<NumberInputTest isStepperVisible step={0.5} />);
    numberInput.type('10,1');
    numberInput.checkValue('10,1');

    numberInput.increment();
    numberInput.checkValue('10,6');
    numberInput.increment();
    numberInput.checkValue('11,1');
    numberInput.increment();
    numberInput.checkValue('11,6');

    numberInput.decrement();
    numberInput.checkValue('11,1');
    numberInput.decrement();
    numberInput.checkValue('10,6');
    numberInput.decrement();
    numberInput.checkValue('10,1');
  });

  it('should not display anything when value is null', () => {
    cy.mount(<NumberInputTest />);

    numberInput.checkValue('');
  });

  it('should not display anything when value is undefined', () => {
    cy.mount(
      <ComponentsProvider language="cs">
        {
          // @ts-ignore
          <NumberInput value={undefined} />
        }
      </ComponentsProvider>
    );

    numberInput.checkValue('');
  });

  it('should not display anything when value is NaN', () => {
    cy.mount(<NumberInputTest value={NaN} />);

    numberInput.checkValue('');
  });

  it('should not display anything when value is string', () => {
    // @ts-ignore
    cy.mount(<NumberInputTest value="TEST" />);

    numberInput.checkValue('');
  });

  it('should correctly change number after moving the cursor', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type('11{leftarrow}22');
    numberInput.checkValue('1 221');

    numberInput.type('{leftarrow}33');
    numberInput.checkValue('123 321');

    numberInput.type('{leftarrow}44');
    numberInput.checkValue('12 344 321');

    numberInput.type('{backspace}{backspace}');
    numberInput.checkValue('123 321');

    numberInput.type('{rightarrow}{backspace}{backspace}{backspace}{backspace}');
    numberInput.checkValue('321');

    numberInput.type(55);
    numberInput.checkValue('55 321');

    numberInput.type(',');
    numberInput.checkValue('55,321');
  });

  it('should correctly handle negative numbers', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type('-12345');
    numberInput.checkValue('-12 345');
  });

  it('should correctly handle negative numbers starting with zero', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type('-0,1234');
    numberInput.checkValue('-0,1234');
  });

  it('should correctly handle negative numbers with alternative minus signs', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type('‐12345');
    numberInput.checkValue('-12 345');
    numberInput.clear();

    numberInput.type('‑12345');
    numberInput.checkValue('-12 345');
    numberInput.clear();

    numberInput.type('−12345');
    numberInput.checkValue('-12 345');
    numberInput.clear();

    numberInput.type('–12345');
    numberInput.checkValue('-12 345');
    numberInput.clear();

    numberInput.type('—12345');
    numberInput.checkValue('-12 345');
  });

  it('should keep decimal zeros', () => {
    cy.mount(<NumberInputTest />);

    numberInput.type('123,0000');
    numberInput.checkValue('123,0000');

    numberInput.type(
      '{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{backspace}'
    );
    numberInput.checkValue('13,0000');

    numberInput.type(9);
    numberInput.checkValue('193,0000');
  });
});
