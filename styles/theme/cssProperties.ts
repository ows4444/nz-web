/* eslint-disable no-unused-vars */
export enum CSSProperties {
  width = 'width',
  maxWidth = 'maxWidth',
  minWidth = 'minWidth',

  height = 'height',
  maxHeight = 'maxHeight',
  minHeight = 'minHeight',

  padding = 'padding',
  paddingTop = 'paddingTop',
  paddingRight = 'paddingRight',
  paddingBottom = 'paddingBottom',
  paddingLeft = 'paddingLeft',

  margin = 'margin',
  marginTop = 'marginTop',
  marginRight = 'marginRight',
  marginBottom = 'marginBottom',
  marginLeft = 'marginLeft',

  border = 'border',
  borderWidth = 'borderWidth',
  borderColor = 'borderColor',
  borderStyle = 'borderStyle',
  borderTop = 'borderTop',
  borderRight = 'borderRight',
  borderBottom = 'borderBottom',
  borderLeft = 'borderLeft',
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
      return 'border-radius';
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
    case CSSProperties.maxWidth:
      return 'max-width';
    case CSSProperties.minWidth:
      return 'min-width';
    case CSSProperties.maxHeight:
      return 'max-height';
    case CSSProperties.minHeight:
      return 'min-height';
    case CSSProperties.paddingTop:
      return 'padding-top';
    case CSSProperties.paddingRight:
      return 'padding-right';
    case CSSProperties.paddingBottom:
      return 'padding-bottom';
    case CSSProperties.paddingLeft:
      return 'padding-left';
    case CSSProperties.marginTop:
      return 'margin-top';
    case CSSProperties.marginRight:
      return 'margin-right';
    case CSSProperties.marginBottom:
      return 'margin-bottom';
    case CSSProperties.marginLeft:
      return 'margin-left';
    case CSSProperties.borderWidth:
      return 'border-width';
    case CSSProperties.borderColor:
      return 'border-color';
    case CSSProperties.borderStyle:
      return 'border-style';
    case CSSProperties.borderTop:
      return 'border-top';
    case CSSProperties.borderRight:
      return 'border-right';
    case CSSProperties.borderBottom:
      return 'border-bottom';
    case CSSProperties.borderLeft:
      return 'border-left';

    default:
      return element;
  }
};
