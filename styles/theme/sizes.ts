/* eslint-disable no-unused-vars */

enum SizesList {
  none = 'none',
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  // for radius
  pill = 'pill',
  circle = 'circle',
  // for shadow
  inset = 'inset',

  // for transition
  all = 'all',
}

enum FontWeightList {
  thin = 'thin',
  extraLight = 'extraLight',
  light = 'light',
  normal = 'normal',
  medium = 'medium',
  semiBold = 'semiBold',
  bold = 'bold',
  extraBold = 'extraBold',
  black = 'black',
}

enum LineHightTypes {
  tight = 'tight',
  normal = 'normal',
  loose = 'loose',
  responsiveBase = 'responsiveBase',
  responsiveScale = 'responsiveScale',
}

export const Sizes = Object.fromEntries(
  Object.entries(SizesList).filter(([key]) => !['none', 'pill', 'circle', 'inset', 'all'].includes(key)),
) as Record<Exclude<keyof typeof SizesList, 'none' | 'pill' | 'circle' | 'inset' | 'all'>, SizesList>;

export const RadiusSizes = Object.fromEntries(
  Object.entries(SizesList).filter(([key]) => !['inset', 'all'].includes(key)),
) as Record<Exclude<keyof typeof SizesList, 'inset' | 'all'>, SizesList>;

export const ShadowSizes = Object.fromEntries(
  Object.entries(SizesList).filter(([key]) => !['pill', 'circle', 'all'].includes(key)),
) as Record<Exclude<keyof typeof SizesList, 'pill' | 'circle' | 'all'>, SizesList>;

export const TransitionSizes = Object.fromEntries(
  Object.entries(SizesList).filter(([key]) => !['none', 'xxs', 'pill', 'circle', 'inset'].includes(key)),
) as Record<Exclude<keyof typeof SizesList, 'none' | 'xxs' | 'pill' | 'circle' | 'inset'>, SizesList>;

export type FontWeight = keyof typeof FontWeightList;
export type Size = keyof typeof Sizes;
export type RadiusSize = keyof typeof RadiusSizes;
export type ShadowSize = keyof typeof ShadowSizes;
export type TransitionSize = keyof typeof TransitionSizes;
export type LineHight = keyof typeof LineHightTypes;
