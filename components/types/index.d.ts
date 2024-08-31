/* eslint-disable no-unused-vars */
import { Component } from '@styles/theme/components';

export enum colorEnum {
  primary = 'primary',
  secondary = 'secondary',
  background = 'background',
  text = 'text',
  border = 'border',
}
export type Color = keyof typeof colorEnum;

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

export enum borderSizeEnum {
  thin = 'thin',
  extraLight = 'extraLight',
  light = 'light',
  normal = 'normal',
  medium = 'medium',
  semiBold = 'semiBold',
  bold = 'bold',
  extraBold = 'extraBold',
}
export type borderSize = keyof typeof borderSizeEnum;

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

export enum VariantEnum {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
  gradient = 'gradient',
  transparent = 'transparent',
}

export type Variant = keyof typeof VariantEnum;

export enum StateEnum {
  default = 'default',
  hover = 'hover',
  active = 'active',
  disabled = 'disabled',
  focus = 'focus',
}
export type State = keyof typeof StateEnum;

export enum StatusEnum {
  default = 'default',
  error = 'error',
  warning = 'warning',
  info = 'info',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  black = 'black',
  white = 'white',
}
export type Status = keyof typeof StatusEnum;

export enum GradientEnum {
  default = 'default',
  error = 'error',
  warning = 'warning',
  info = 'info',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
}
export type Gradient = keyof typeof GradientEnum;

export enum FontFamilyEnum {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
}
export type FontFamily = keyof typeof FontFamilyEnum;

export enum MarginPaddingEnum {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}
export type MarginPadding = keyof typeof MarginPaddingEnum;

export enum FontWeightEnum {
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
export type FontWeight = keyof typeof FontWeightEnum;

export enum LineHightEnum {
  tight = 'tight',
  normal = 'normal',
  loose = 'loose',
  resBase = 'resBase',
  resScale = 'resScale',
}
export type LineHight = keyof typeof LineHightEnum;

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

type TypographyWithBox = {
  $align?: 'left' | 'center' | 'right' | 'justify';
  $color?: string;
  $fontFamily?: string;
  $fontSize?: string;
  $fontStyle?: 'normal' | 'italic' | 'oblique';
  $fontWeight?: FontWeight;
  $letterSpacing?: string;
  $lineHeight?: string;
  $textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  $whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
  $textOverflow?: 'clip' | 'ellipsis';
  $padding?: string;
  $margin?: MarginPadding;
  $border?: string;
  $borderRadius?: string;
  $boxShadow?: string;
  $width?: string;
  $height?: string;
  $minWidth?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  $position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: ZIndex;
};

type InvalidPropError<
  Prop extends string,
  Layout extends string,
> = `Invalid property "${Prop}" for layout type "${Layout}".`;

type FlexBoxLayout = TypographyWithBox & {
  $layout: 'flex';
  $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  $gap?: string;
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

type GridBoxLayout = TypographyWithBox & {
  $layout: 'grid';
  $columns?: string;
  $rows?: string;
  $gap?: string;
  $columnGap?: string;
  $rowGap?: string;
  $areas?: string;
  $autoColumns?: string;
  $autoRows?: string;
  $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  $grid?: string;
  $gridAutoColumns?: string;
  $gridAutoFlow?: string;
  $gridAutoRows?: string;
  $gridTemplate?: string;
  $gridTemplateAreas?: string;
  $gridTemplateColumns?: string;
  $gridTemplateRows?: string;
};

type FlexBoxItemLayout = TypographyWithBox & {
  $layout: 'flex-item';
  $flex?: string;
  $order?: number;
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: string;
  $alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

type GridBoxItemLayout = TypographyWithBox & {
  $layout: 'grid-item';
  $gridArea?: string;
  $gridColumn?: string;
  $gridColumnEnd?: string;
  $gridColumnStart?: string;
  $gridRow?: string;
  $gridRowEnd?: string;
  $gridRowStart?: string;
};

export type Props = GridBoxItemLayout & FlexBoxItemLayout & GridBoxLayout & FlexBoxLayout & TypographyWithBox;

export type LayoutProps<T = {}> = T &
  (
    | (Omit<GridBoxLayout, '$layout'> & { $layout?: 'grid' })
    | (Omit<GridBoxItemLayout, '$layout'> & { $layout?: 'grid-item' })
    | (Omit<FlexBoxLayout, '$layout'> & { $layout?: 'flex' })
    | (Omit<FlexBoxItemLayout, '$layout'> & { $layout?: 'flex-item' })
  );
//| DisplayType

export type Layout<T = {}> = LayoutProps<T>;
export type BoxLayout<T> = Omit<FlexBoxLayout | GridBoxLayout, '$layout'> & {
  $layout?: 'grid' | 'flex';
} & T;
export type ItemLayout<T> = Omit<FlexBoxItemLayout | GridBoxItemLayout, '$layout'> & {
  $layout?: 'grid-item' | 'flex-item';
} & T;
export type BasicLayout<T> = TypographyWithBox /*  & DisplayType */ & T;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
export interface ThemePaletteInterface {
  fontSizes: PartialRecord<FontWeight, number>;
  fontFamilies: PartialRecord<FontFamily, string>;
  colors: PartialRecord<Color, string>;
  borderSizes: PartialRecord<borderSize, string>;
  borderRadius: PartialRecord<BorderRadius, string>;
  marginPadding: PartialRecord<MarginPadding, string>;
  zIndex: PartialRecord<ZIndex, 'auto' | number>;
  gradients: PartialRecord<Gradient, string>;
  elements: PartialRecord<Component, PartialRecord<CSSProperties>>;
}

export interface ThemeInterface {
  palate: ThemePaletteInterface;
  addFontSize(fontWeight: FontWeight, size: number): this;
  addFontFamily(fontFamily: FontFamily, value: string): this;
  addColor(color: Color, value: string): this;
  addBorderSize(borderSize: borderSize, value: string): this;
  addBorderRadius(borderRadius: BorderRadius, value: string): this;
  addMarginPadding(marginPadding: MarginPadding, value: string): this;
  addZIndex(zIndex: ZIndex, value: 'auto' | number): this;
  addGradientStyles(gradient: Gradient, value: string): this;
  addElementStyles(component: Component, css: PartialRecord<CSSProperties>): this;

  generateCSS(component: Component, props: any): string;
}
