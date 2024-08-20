/* eslint-disable no-unused-vars */
export enum Sizes {
  MIN = 'MIN',
  XXS = 'XXS',
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
  MAX = 'MAX',
}

export type Size = keyof typeof Sizes;
