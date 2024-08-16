/* eslint-disable no-unused-vars */
export enum Sizes {
  XXXSmall = 'XXXSmall',
  XXSmall = 'XXSmall',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Default = 'Default',
  Large = 'Large',
  XLarge = 'XLarge',
  XXLarge = 'XXLarge',
  XXXLarge = 'XXXLarge',
}

export type Size = keyof typeof Sizes;
