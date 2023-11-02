import {useState} from 'react';

import {ComponentsProvider} from '../../ComponentsProvider/ComponentsProvider';
import {CurrencyInput, CurrencyInputProps} from '../CurrencyInput';

const CurrencyInputTest = (props: Partial<CurrencyInputProps>) => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ComponentsProvider language="cs">
      <CurrencyInput
        value={value}
        onChange={setValue}
        data-testid="cypress-currencyInput"
        {...props}
        currency="CZK"
      />
    </ComponentsProvider>
  );
};

const currencyInput = {
  type: (value: string | number) => cy.get('input').type(value.toString()),
  clear: () => cy.get('input').clear(),
  checkValue: (value: string | null) => cy.get('input').should('have.value', value),
};

describe('currencyInput', () => {
  it('should type all allowed characters', () => {
    cy.mount(<CurrencyInputTest />);

    currencyInput.type(1234567890);
    currencyInput.checkValue('1 234 567 890');
    currencyInput.clear();

    currencyInput.type('3,1459');
    currencyInput.checkValue('3,1459');
    currencyInput.clear();

    currencyInput.type('QWERTZ');
    currencyInput.checkValue('');
  });

  it('should limit decimal by precision', () => {
    cy.mount(<CurrencyInputTest decimalPlaces={2} />);

    currencyInput.type(12345678990);
    currencyInput.checkValue('12 345 678 990');

    currencyInput.clear();

    currencyInput.type('3,14159');
    currencyInput.checkValue('3,14');
  });

  it('should not display anything when value is null', () => {
    cy.mount(<CurrencyInputTest />);

    currencyInput.checkValue('');
  });

  it('should not display anything when value is undefined', () => {
    cy.mount(
      <ComponentsProvider language="cs">
        {
          // @ts-ignore
          <CurrencyInput value={undefined} currency="CZK" />
        }
      </ComponentsProvider>
    );

    currencyInput.checkValue('');
  });

  it('should not display anything when value is NaN', () => {
    cy.mount(<CurrencyInputTest value={NaN} />);

    currencyInput.checkValue('');
  });

  it('should not display anything when value is string', () => {
    // @ts-ignore
    cy.mount(<CurrencyInputTest value="TEST" />);

    currencyInput.checkValue('');
  });

  it('should correctly change number after moving the cursor', () => {
    cy.mount(<CurrencyInputTest />);

    currencyInput.type('11{leftarrow}22');
    currencyInput.checkValue('1 221');

    currencyInput.type('{leftarrow}33');
    currencyInput.checkValue('123 321');

    currencyInput.type('{leftarrow}44');
    currencyInput.checkValue('12 344 321');

    currencyInput.type('{backspace}{backspace}');
    currencyInput.checkValue('123 321');

    currencyInput.type('{rightarrow}{backspace}{backspace}{backspace}{backspace}');
    currencyInput.checkValue('321');

    currencyInput.type(55);
    currencyInput.checkValue('55 321');

    currencyInput.type(',');
    currencyInput.checkValue('55,321');
  });

  it('should keep decimal zeros', () => {
    cy.mount(<CurrencyInputTest />);

    currencyInput.type('123,0000');
    currencyInput.checkValue('123,0000');

    currencyInput.type(
      '{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{backspace}'
    );
    currencyInput.checkValue('13,0000');

    currencyInput.type(9);
    currencyInput.checkValue('193,0000');
  });
});
