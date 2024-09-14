/* eslint-disable no-unused-vars */
export enum VariantEnum {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
  gradient = 'gradient',
  transparent = 'transparent',
}

export type Variant = keyof typeof VariantEnum;
