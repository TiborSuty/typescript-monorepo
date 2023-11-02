import {components} from 'e2e-utils';

import {useState} from 'react';

import {ComponentsProvider} from '../../ComponentsProvider/ComponentsProvider';
import {DatePicker} from '../DatePicker';

const DatePickerTest = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <ComponentsProvider language="cs">
      <DatePicker
        value={value}
        onChange={setValue}
        data-testid="datePicker"
        relativeDates={[
          {label: 'Summer', date: new Date(2020, 5, 30)},
          {label: 'Winter', date: new Date(2020, 11, 24)},
        ]}
      />
    </ComponentsProvider>
  );
};

describe('DatePicker', () => {
  it('should handle repetitive focus/blur events', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');

    datePicker.openAndSelectDate(2020, 11, 24);
    datePicker.clear();
    datePicker.type('30.6.2020');
    datePicker.blur();
    datePicker.openAndSelectDate(2011, 0, 1);

    datePicker.focus();
    datePicker.clear();
    datePicker.type('30.6.2020');

    datePicker.blur();
    datePicker.shouldHaveValue('30. 6. 2020');
  });

  it('should format date form input', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');

    datePicker.type('30.6.2020');
    datePicker.blur();
    datePicker.shouldHaveValue('30. 6. 2020');
  });

  it('should reset value when input is deleted', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');

    datePicker.openAndSelectDate(2020, 11, 24);
    datePicker.shouldHaveValue('24. 12. 2020');

    datePicker.focus();
    datePicker.clear();
    datePicker.blur();

    datePicker.shouldHaveValue('');
  });

  it('should format date selected from calendar', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');

    /**
     * new Date(2020, 5, 30) = 30.6.2020 (month is zero-based)
     */
    datePicker.openAndSelectDate(2020, 5, 30);
    datePicker.shouldHaveValue('30. 6. 2020');
  });

  it('should handle pasted date', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');
    datePicker.type('12345');

    cy.getByTestId('datePicker-input-input').then((destination) => {
      const pasteEvent = Object.assign(new Event('paste', {bubbles: true, cancelable: true}), {
        clipboardData: {
          getData: () => '30.6.2020',
        },
      });

      destination[0].dispatchEvent(pasteEvent);
    });

    datePicker.shouldHaveValue('30. 6. 2020');
  });

  it('displays selected relative date', () => {
    cy.mount(<DatePickerTest />);

    const datePicker = components.datePicker('datePicker');
    datePicker.open();
    datePicker.clickOnNthRelativeDate(0);
    datePicker.shouldHaveValue('30. 6. 2020');
    datePicker.shouldBePopoverClosed();
  });
});
