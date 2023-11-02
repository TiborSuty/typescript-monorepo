import {buildObject} from '../buildObject';

interface Testing {
  a: number;
  b: string;
  c: boolean;
  d?: Record<string, number>;
  e: string[];
}

describe('buildObject', () => {
  it('should build', () => {
    const result = buildObject<Testing>().a(10).b('abc').c(true).e(['john', 'tester']).build();
    expect(result).toEqual({
      a: 10,
      b: 'abc',
      c: true,
      e: ['john', 'tester'],
    });
  });

  it('argument when should working', () => {
    const a = 10;
    const isTen = a === 10;
    const result = buildObject<Testing>()
      .a(10, isTen)
      .b('abc', false)
      .c(true, false)
      .e(['john', 'tester'], false)
      .build();
    expect(result).toEqual({
      a,
    });
  });

  it('also optional props should return', () => {
    // Note that d is optional, however it's set method is not
    const result = buildObject<Testing>()
      .a(10)
      .b('abc')
      .c(true)
      .d({number: 666}, true)
      .e(['john', 'tester'])
      .build();
    expect(result).toEqual({
      a: 10,
      b: 'abc',
      c: true,
      d: {number: 666},
      e: ['john', 'tester'],
    });
  });
});
