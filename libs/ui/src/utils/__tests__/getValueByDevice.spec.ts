import { getValueByDevice } from '../getValueByDevice';

describe('getValueByDevice', () => {
  it('should return the correct value for mobile device', () => {
    const value = getValueByDevice(
      'Mobile',
      'Tablet',
      'Notebook',
      'Desktop',
      'mobile'
    );
    expect(value).toBe('Mobile');
  });

  it('should return the correct value for tablet device', () => {
    const value = getValueByDevice(
      'Mobile',
      'Tablet',
      'Notebook',
      'Desktop',
      'tablet'
    );
    expect(value).toBe('Tablet');
  });

  it('should return the correct value for notebook device', () => {
    const value = getValueByDevice(
      'Mobile',
      'Tablet',
      'Notebook',
      'Desktop',
      'notebook'
    );
    expect(value).toBe('Notebook');
  });

  it('should return the correct value for desktop device', () => {
    const value = getValueByDevice(
      'Mobile',
      'Tablet',
      'Notebook',
      'Desktop',
      'desktop'
    );
    expect(value).toBe('Desktop');
  });
});
