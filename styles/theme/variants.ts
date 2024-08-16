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

export type Variant = keyof typeof Variants;
