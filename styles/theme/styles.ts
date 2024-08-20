/* eslint-disable no-unused-vars */
export enum ElementsCss {
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
  fontFamily = 'fontFamily',
  textAlign = 'textAlign',
}

export type ElementCss = keyof typeof ElementsCss;


export const TransformName = (  element: ElementCss) => {
  switch (element) {
    case ElementsCss.width:
      return 'width';
    case ElementsCss.height:
      return 'height';
    case ElementsCss.padding:
      return 'padding';
    case ElementsCss.margin:
      return 'margin';
    case ElementsCss.border:
      return 'border';
    case ElementsCss.borderRadius:
      return 'border-radius';
    case ElementsCss.backgroundColor:
      return 'background-color';
    case ElementsCss.color:
      return 'color';
    case ElementsCss.fontSize:
      return 'font-size';
    case ElementsCss.fontWeight:
      return 'font-weight';
    case ElementsCss.fontFamily:
      return 'font-family';
    case ElementsCss.textAlign:
      return 'text-align';
    default:
      return '';
  }
}