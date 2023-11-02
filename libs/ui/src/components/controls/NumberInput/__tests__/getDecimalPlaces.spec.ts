import {getDecimalPlaces} from '../utils/getDecimalPlaces';

describe('removeLeadingZeros', () => {
  it('Should return the number of decimal places', () => {
    expect(getDecimalPlaces(',', '500')).toBe(0);
    expect(getDecimalPlaces(',', '50,')).toBe(0);
    expect(getDecimalPlaces(',', '50,0')).toBe(1);
    expect(getDecimalPlaces(',', '50,00')).toBe(2);
    expect(getDecimalPlaces('.', '50,00')).toBe(0);
    expect(getDecimalPlaces('.', null)).toBe(0);
  });
});
