import {getWhiteSpaceCSSValue} from '../getWhiteSpaceCSSValue';

describe('getWhiteSpaceCSSValue', () => {
  it('returns nowrap when noWrap is true', () => {
    expect(getWhiteSpaceCSSValue({noWrap: true})).toEqual('nowrap');
  });

  it('returns pre-wrap when preWrap is true', () => {
    expect(getWhiteSpaceCSSValue({preWrap: true})).toEqual('pre-wrap');
  });

  it('returns inherit when noWrap and preWrap are false', () => {
    expect(getWhiteSpaceCSSValue({noWrap: false, preWrap: false})).toEqual('inherit');
  });

  it('throws an error when noWrap and preWrap are both true', () => {
    expect(() => getWhiteSpaceCSSValue({noWrap: true, preWrap: true})).toThrowError(
      'Cannot use both noWrap and preWrap'
    );
  });
});
