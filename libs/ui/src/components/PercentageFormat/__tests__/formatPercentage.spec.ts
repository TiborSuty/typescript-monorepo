import {defaultLocaleConfigs} from '../../../utils/defaultLocaleConfigs';
import {formatPercentage} from '../formatPercentage';

describe('formatPercentage', () => {
  it('should return percentage', () => {
    expect(formatPercentage(0.004, defaultLocaleConfigs.cs)).toBe('0,4 %');
    expect(formatPercentage(0.005, defaultLocaleConfigs.cs)).toBe('0,5 %');
    expect(formatPercentage(0.254, defaultLocaleConfigs.cs)).toBe('25,4 %');
    expect(formatPercentage(0.255, defaultLocaleConfigs.cs)).toBe('25,5 %');
    expect(formatPercentage(1, defaultLocaleConfigs.cs)).toBe('100 %');
    expect(formatPercentage(12.345, defaultLocaleConfigs.cs)).toBe('1 234,5 %');
  });

  it('should return rounded nearest', () => {
    expect(formatPercentage(0.004, defaultLocaleConfigs.cs, 'nearest')).toBe('0 %');
    expect(formatPercentage(0.005, defaultLocaleConfigs.cs, 'nearest')).toBe('1 %');
    expect(formatPercentage(0.254, defaultLocaleConfigs.cs, 'nearest')).toBe('25 %');
    expect(formatPercentage(0.255, defaultLocaleConfigs.cs, 'nearest')).toBe('26 %');
    expect(formatPercentage(1, defaultLocaleConfigs.cs, 'nearest')).toBe('100 %');
    expect(formatPercentage(12.345, defaultLocaleConfigs.cs, 'nearest')).toBe('1 235 %');
  });

  it('should return rounded down percentage', () => {
    expect(formatPercentage(0.254, defaultLocaleConfigs.cs, 'down')).toBe('25 %');
    expect(formatPercentage(0.255, defaultLocaleConfigs.cs, 'down')).toBe('25 %');
    expect(formatPercentage(0.256, defaultLocaleConfigs.cs, 'down')).toBe('25 %');
    expect(formatPercentage(0.25999, defaultLocaleConfigs.cs, 'down')).toBe('25 %');
    expect(formatPercentage(0.26, defaultLocaleConfigs.cs, 'down')).toBe('26 %');
    expect(formatPercentage(0.26, defaultLocaleConfigs.cs, 'down')).toBe('26 %');
    expect(formatPercentage(1, defaultLocaleConfigs.cs, 'down')).toBe('100 %');
    expect(formatPercentage(12.345, defaultLocaleConfigs.cs, 'down')).toBe('1 234 %');
  });

  it('should return rounded up percentage', () => {
    expect(formatPercentage(0.251, defaultLocaleConfigs.cs, 'up')).toBe('26 %');
    expect(formatPercentage(0.2501, defaultLocaleConfigs.cs, 'up')).toBe('26 %');
    expect(formatPercentage(0.2501, defaultLocaleConfigs.cs, 'up')).toBe('26 %');
    expect(formatPercentage(1, defaultLocaleConfigs.cs, 'up')).toBe('100 %');
    expect(formatPercentage(12.345, defaultLocaleConfigs.cs, 'up')).toBe('1 235 %');
  });
});
