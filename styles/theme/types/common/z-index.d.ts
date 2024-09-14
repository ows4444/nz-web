/* eslint-disable no-unused-vars */
export enum ZIndexEnum {
  auto = 'auto',
  dropdown = 'dropdown',
  sticky = 'sticky',
  fixed = 'fixed',
  modal = 'modal',
  popover = 'popover',
  tooltip = 'tooltip',
}
export type ZIndex = keyof typeof ZIndexEnum;
