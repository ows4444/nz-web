/* eslint-disable no-unused-vars */
type BuildArray<Length extends number, Acc extends number[] = []> = Acc['length'] extends Length
  ? Acc
  : BuildArray<Length, [...Acc, Acc['length']]>;
type NumericRange<From extends number, To extends number> = Exclude<BuildArray<To>[number], BuildArray<From>[number]>;
type LargeRange = `${1 | 10 | 100 | 1000 | 10000}` | `${number}`;

export type Length = `${LargeRange}${'px' | 'em' | 'rem'}` | `${NumericRange<0, 101>}${'vh' | 'vw' | '%'}`;

// like 1px solid #000
export type BorderLength =
  | `${LargeRange}${'px' | 'em' | 'rem'} ${'solid' | 'dashed' | 'dotted'}`
  | `${LargeRange}${'px' | 'em' | 'rem'} ${'solid' | 'dashed' | 'dotted'} ${string}`;

type WithDirection<T> = T | [T, T] | [T, T, T] | [T, T, T, T];

export type BorderLengthWithDirection = WithDirection<BorderLength>;
export type LengthWithDirection = WithDirection<Length>;

export { Color, colorEnum } from './color';
export type { Gradient } from './gradient';
export type { Variant } from './variant';
export type { ZIndex } from './z-index';
export type { Type } from './type';
export type { MediaSize } from './media-size';
