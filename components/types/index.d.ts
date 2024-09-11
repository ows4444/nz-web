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

type BuildArray<Length extends number, Acc extends number[] = []> = Acc['length'] extends Length
  ? Acc
  : BuildArray<Length, [...Acc, Acc['length']]>;
type NumericRange<From extends number, To extends number> = Exclude<BuildArray<To>[number], BuildArray<From>[number]>;
type LargeRange = `${1 | 10 | 100 | 1000 | 10000}` | `${number}`;
type Length = `${LargeRange}${'px' | 'em' | 'rem'}` | `${NumericRange<0, 101>}${'vh' | 'vw' | '%'}`;

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

export enum FontSizeEnum {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
  resBase = 'resBase',
  resScale = 'resScale',
}
export type FontSize = keyof typeof FontSizeEnum;

export enum LineHightEnum {
  tight = 'tight',
  normal = 'normal',
  loose = 'loose',
  resBase = 'resBase',
  resScale = 'resScale',
}
export type LineHight = keyof typeof LineHightEnum;

type TypographyWithBox = {
  $align?: 'left' | 'center' | 'right' | 'justify';
  $fontFamily?: FontFamily;
  $fontSize?: FontSize;
  $fontStyle?: 'normal' | 'italic' | 'oblique';
  $fontWeight?: FontWeight;
  $letterSpacing?: string;
  $listStyle?:
    | 'none'
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-roman'
    | 'upper-roman'
    | 'lower-greek'
    | 'lower-latin'
    | 'upper-latin'
    | 'armenian'
    | 'georgian'
    | 'lower-alpha'
    | 'upper-alpha'
    | 'none';
  $lineHeight?: LineHight;
  $textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  $whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
  $textOverflow?: 'clip' | 'ellipsis';
  $padding?: MarginPadding;
  $paddingTop?: MarginPadding;
  $paddingRight?: MarginPadding;
  $paddingBottom?: MarginPadding;
  $paddingLeft?: MarginPadding;
  $margin?: MarginPadding;
  $marginTop?: MarginPadding;
  $marginRight?: MarginPadding;
  $marginBottom?: MarginPadding;
  $marginLeft?: MarginPadding;
  $border?: borderSize;
  $borderTop?: borderSize;
  $borderRight?: borderSize;
  $borderBottom?: borderSize;
  $borderLeft?: borderSize;
  $borderRadius?: BorderRadius;
  $boxShadow?: string;

  $backgroundColor?: Color;
  $color?: Color;
  $width?: Length;
  $height?: Length;
  $minWidth?: Length;
  $minHeight?: Length;
  $maxWidth?: Length;
  $maxHeight?: Length;
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

type BlockBoxLayout = TypographyWithBox & {
  $layout: 'block';
  $float?: 'left' | 'right' | 'none';
  $clear?: 'left' | 'right' | 'both' | 'none';
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
  $gridTemplateAreas?: Array<string>;
  $gridTemplateColumns?: string;
  $gridTemplateRows?: string;
};

type FlexBoxItemLayout = TypographyWithBox & {
  $layoutItem: 'flex-item';
  $flex?: string;
  $order?: number;
  $flexGrow?: number;
  $flexShrink?: number;
  $flexBasis?: string;
  $alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

type GridBoxItemLayout = TypographyWithBox & {
  $layoutItem: 'grid-item';
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
    | (Omit<FlexBoxLayout, '$layout'> & { $layout?: 'flex' })
    | (Omit<BlockBoxLayout, '$layout'> & { $layout?: 'block' })
  ) &
  (
    | (Omit<GridBoxItemLayout, '$layoutItem'> & { $layoutItem?: 'grid-item' })
    | (Omit<FlexBoxItemLayout, '$layoutItem'> & { $layoutItem?: 'flex-item' })
  );

export type Layout<T = {}> = LayoutProps<T>;
export type BoxLayout<T = {}> = T &
  ((Omit<GridBoxLayout, '$layout'> & { $layout?: 'grid' }) | (Omit<FlexBoxLayout, '$layout'> & { $layout?: 'flex' }));

export type ItemLayout<T = {}> = T &
  (
    | (Omit<FlexBoxItemLayout, '$layoutItem'> & { $layoutItem?: 'flex-item' })
    | (Omit<GridBoxItemLayout, '$layoutItem'> & { $layoutItem?: 'grid-item' })
  );

export type BasicLayout<T> = TypographyWithBox & T;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
export interface ThemePaletteInterface {
  fontWeights: PartialRecord<FontWeight, number>;
  fontFamilies: PartialRecord<FontFamily, string>;
  fontSizes: PartialRecord<FontSize, number>;
  colors: PartialRecord<Color, string>;
  borderSizes: PartialRecord<borderSize, string>;
  borderRadius: PartialRecord<BorderRadius, string>;
  marginPadding: PartialRecord<MarginPadding, string>;
  zIndex: PartialRecord<ZIndex, 'auto' | number>;
  gradients: PartialRecord<Gradient, string>;
  elements: PartialRecord<Component, PartialRecord<TypographyWithBox>>;
}

export interface ThemeInterface {
  palate: ThemePaletteInterface;
  addFontWeight(fontWeight: FontWeight, size: number): this;
  addFontFamily(fontFamily: FontFamily, value: string): this;
  addFontSize(fontSize: FontSize, value: number): this;
  addColor(color: Color, value: string): this;
  addBorderSize(borderSize: borderSize, value: string): this;
  addBorderRadius(borderRadius: BorderRadius, value: string): this;
  addMarginPadding(marginPadding: MarginPadding, value: string): this;
  addZIndex(zIndex: ZIndex, value: 'auto' | number): this;
  addGradientStyles(gradient: Gradient, value: string): this;
  addElementStyles(component: Component, css: PartialRecord<TypographyWithBox>): this;

  generateCSS(component: Component, props: any): string;
}
