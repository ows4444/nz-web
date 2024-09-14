/* eslint-disable no-unused-vars */
export enum LineHightEnum {
  tight = 'tight',
  normal = 'normal',
  loose = 'loose',
}
export type LineHight = keyof typeof LineHightEnum;
