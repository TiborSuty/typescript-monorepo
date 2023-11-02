import {getJustifyFromAlign} from '../getJustifyFromAlign';

describe('getJustifyFromAlign', () => {
  it('returns default justify when align is not defined', () => {
    expect(getJustifyFromAlign(undefined)).toBe('flex-start');
  });

  it('returns justify for any align value', () => {
    expect(getJustifyFromAlign('left')).toBe('flex-start');
    expect(getJustifyFromAlign('center')).toBe('center');
    expect(getJustifyFromAlign('right')).toBe('flex-end');
  });
});
