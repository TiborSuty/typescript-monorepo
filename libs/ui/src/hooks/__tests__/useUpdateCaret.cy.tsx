import { useState } from 'react';

import { useUpdateCaret } from '../useUpdateCaret';
import { defaultLocaleConfigs } from '../../utils/defaultLocaleConfigs';
import { getFormattedInputNumber } from '../../components/controls/NumberInput/utils/getFormattedInputNumber';

function UpdateCaret() {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const { inputRef, updateCaret } = useUpdateCaret(
    defaultLocaleConfigs.cs.number.thousandsSeparator
  );

  const handleChange = (value: string | null) => {
    const formattedValue = getFormattedInputNumber(
      defaultLocaleConfigs.cs.number,
      value
    );

    setInputValue(formattedValue);
    updateCaret();
  };

  return (
    <ComponentsProvider language="cs">
      <PlatformInputElement
        id="test-input"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        isDisabled={false}
        isInvalid={false}
      />
    </ComponentsProvider>
  );
}

describe('useUpdateCaret', () => {
  it('should not be focused on mount', () => {
    cy.mount(<UpdateCaret />);

    cy.get('#test-input').should('not.be.focused');
  });

  it('should not be focused after type', () => {
    cy.mount(<UpdateCaret />);

    cy.get('#test-input').type('123');
    cy.get('#test-input').should('be.focused');
  });

  it('should keep cursor on right place after remove character', () => {
    cy.mount(<UpdateCaret />);

    cy.get('#test-input').type('123456');
    cy.get('#test-input').should('have.value', '123 456');
    cy.get('#test-input').type('{leftArrow}{leftArrow}{leftArrow}{backspace}');
    cy.get('#test-input').should('have.value', '123 456');
    cy.get('#test-input').type('{backspace}');
    cy.get('#test-input').should('have.value', '12 456');
    cy.get('#test-input').type('{backspace}');
    cy.get('#test-input').should('have.value', '1 456');
    cy.get('#test-input').type('{backspace}');
    cy.get('#test-input').should('have.value', '456');
  });

  it('should keep cursor on right place after add character', () => {
    cy.mount(<UpdateCaret />);

    cy.get('#test-input').type('456');
    cy.get('#test-input').should('have.value', '456');
    cy.get('#test-input').type('{leftArrow}{leftArrow}{leftArrow}1');
    cy.get('#test-input').should('have.value', '1 456');
    cy.get('#test-input').type('2');
    cy.get('#test-input').should('have.value', '12 456');
    cy.get('#test-input').type('3');
    cy.get('#test-input').should('have.value', '123 456');
  });
});
