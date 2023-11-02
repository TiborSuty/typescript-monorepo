import {removeLeadingZeros} from '../removeLeadingZeros';

describe('removeLeadingZeros', () => {
  it('Should remove leading zeros from number as string', () => {
    expect(removeLeadingZeros('00500.00200')).toBe('500.00200');
    expect(removeLeadingZeros('0000.123')).toBe('0.123');
    expect(removeLeadingZeros('0000')).toBe('0');
  });

  it('Should return empty string if value is null', () => {
    expect(removeLeadingZeros(null)).toBe('');
  });
});
