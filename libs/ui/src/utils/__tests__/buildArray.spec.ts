import {buildArray} from '../buildArray';

describe('buildArray', () => {
  it('handles default value', () => {
    expect(buildArray(['One', 'Two'])).toEqual(['One', 'Two']);
  });

  it('works without default value', () => {
    expect(buildArray()).toEqual([]);
  });

  it('adds element', () => {
    expect(buildArray().add('Orange')).toEqual(['Orange']);
  });

  it('adds multiple elements', () => {
    expect(buildArray().add('Orange').add('Lime').add('Mango')).toEqual([
      'Orange',
      'Lime',
      'Mango',
    ]);
  });

  it('conditionally adds element', () => {
    expect(buildArray().add('Orange').when(true, 'Lime').when(false, 'Apple').add('Mango')).toEqual(
      ['Orange', 'Lime', 'Mango']
    );
  });

  it('accepts function as condition', () => {
    expect(
      buildArray()
        .when(() => true, 'Lime')
        .when(() => 0, 'Apple')
    ).toEqual(['Lime']);
  });

  it('accepts number as condition', () => {
    expect(buildArray().when(0, 'Lime').when(1, 'Apple')).toEqual(['Apple']);
  });

  it('conditionally does not add element', () => {
    expect(
      buildArray().add('Orange').whenNot(true, 'Lime').whenNot(false, 'Apple').whenNot(0, 'Mango')
    ).toEqual(['Orange', 'Apple', 'Mango']);
  });

  it('does not mutate initial value', () => {
    const initial = ['One', 'Two'];
    buildArray(initial).add('Orange');
    expect(initial).toEqual(['One', 'Two']);
  });
});
