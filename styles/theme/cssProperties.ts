/* eslint-disable no-unused-vars */
export enum CSSProperties {
  width = 'width',
  height = 'height',
  padding = 'padding',
  margin = 'margin',
  border = 'border',
  borderRadius = 'borderRadius',
  backgroundColor = 'backgroundColor',
  color = 'color',
  fontSize = 'fontSize',
  fontWeight = 'fontWeight',
  textAlign = 'textAlign',
  boxShadow = 'boxShadow',
  display = 'display',
  position = 'position',
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
  zIndex = 'zIndex',
  overflow = 'overflow',
  lineHeight = 'lineHeight',
  flex = 'flex',
  flexDirection = 'flexDirection',
  justifyContent = 'justifyContent',
  alignItems = 'alignItems',
  transform = 'transform',
  transition = 'transition',
  opacity = 'opacity',
}

export type CSSProperty = keyof typeof CSSProperties;

// transform the CSSProperty to the only camelCase that is not camelCase
export const TransformName = (element: CSSProperty) => {
  switch (element) {
    case CSSProperties.borderRadius:
      return 'border-color';
    case CSSProperties.backgroundColor:
      return 'background-color';
    case CSSProperties.fontSize:
      return 'font-size';
    case CSSProperties.fontWeight:
      return 'font-weight';
    case CSSProperties.textAlign:
      return 'text-align';
    case CSSProperties.boxShadow:
      return 'box-shadow';
    case CSSProperties.lineHeight:
      return 'line-height';
    case CSSProperties.flexDirection:
      return 'flex-direction';
    case CSSProperties.justifyContent:
      return 'justify-content';
    case CSSProperties.alignItems:
      return 'align-items';
    case CSSProperties.zIndex:
      return 'z-index';

    default:
      return element;
  }
};
