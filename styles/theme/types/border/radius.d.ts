/* eslint-disable no-unused-vars */
export enum borderRadiusEnum {
  none = 'none',
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  pill = 'pill',
  circle = 'circle',
}

export type BorderRadius = keyof typeof borderRadiusEnum;
