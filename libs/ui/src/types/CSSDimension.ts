/**
 * @about CSS dimension. Prevents the use of px units.
 * @example 50%, 100vh, 10rem
 */

type CSSUnit = 'rem' | '%' | 'vh' | 'vw';
type CSSKeyword = 'min-content' | 'max-content' | 'fit-content' | 'auto' | 'initial';

type CSSCalculatedDimension = `calc(${string})`;
type CSSMinDimension = `min(${string})`;
type CSSMaxDimension = `max(${string})`;
type CSSUnitDimension = `${number}${CSSUnit}`;

export type CSSDimension =
  | CSSCalculatedDimension
  | CSSMinDimension
  | CSSMaxDimension
  | CSSUnitDimension
  | CSSKeyword;
