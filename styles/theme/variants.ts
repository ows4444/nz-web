/* eslint-disable no-unused-vars */
export enum Variants {
  Default = 'Default',
  Error = 'Error',
  Warning = 'Warning',
  Info = 'Info',
  Primary = 'Primary',
  Secondary = 'Secondary',
  Success = 'Success',
  Black = 'Black',
  White = 'White',
}

export const Gradients = Object.fromEntries(
  Object.entries(Variants).filter(([key]) => !['Black', 'White'].includes(key)),
) as Record<Exclude<keyof typeof Variants, 'Black' | 'White'>, Variants>;

export type Gradient = keyof typeof Gradients;
export type Variant = keyof typeof Variants;
