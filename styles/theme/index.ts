import {
  BorderRadius,
  borderSize,
  Color,
  FontFamily,
  FontWeight,
  Gradient,
  MarginPadding,
  Props,
  ThemeInterface,
  ThemePaletteInterface,
  TypographyWithBox,
  ZIndex,
} from '@components/types';
import { Component } from './components';

export class Theme implements ThemeInterface {
  palate!: ThemePaletteInterface;
  constructor() {
    this.palate = {
      borderRadius: {},
      borderSizes: {},
      colors: {},
      fontFamilies: {},
      fontWeights: {},
      marginPadding: {},
      zIndex: {},
      gradients: {},
      elements: {},
    };
  }

  addFontWeight(fontWeight: FontWeight, size: number): this {
    this.palate.fontWeights[fontWeight] = size;
    return this;
  }
  addFontFamily(fontFamily: FontFamily, value: string): this {
    this.palate.fontFamilies[fontFamily] = value;
    return this;
  }
  addColor(color: Color, value: string): this {
    this.palate.colors[color] = value;
    return this;
  }
  addBorderSize(borderSize: borderSize, value: string): this {
    this.palate.borderSizes[borderSize] = value;
    return this;
  }
  addBorderRadius(borderRadius: BorderRadius, value: string): this {
    this.palate.borderRadius[borderRadius] = value;
    return this;
  }
  addMarginPadding(marginPadding: MarginPadding, value: string): this {
    this.palate.marginPadding[marginPadding] = value;
    return this;
  }
  addZIndex(zIndex: ZIndex, value: 'auto' | number): this {
    this.palate.zIndex[zIndex] = value;
    return this;
  }
  addGradientStyles(gradient: Gradient, value: string): this {
    this.palate.gradients[gradient] = value;
    return this;
  }
  addElementStyles(component: Component, css: Partial<TypographyWithBox>): this {
    this.palate.elements[component] = css;
    return this;
  }

  private pxToRem(px: number): string {
    return `${px / 16}rem`;
  }
  private remToPx(rem: number): string {
    return `${rem * 16}px`;
  }
  private getFontSize(fontWeight: FontWeight): number {
    return this.palate.fontWeights[fontWeight] ?? 100;
  }
  private getFontFamily(fontFamily: FontFamily): string {
    return this.palate.fontFamilies[fontFamily] ?? 'Sans-serif, Arial';
  }
  private getColor(color: Color): string {
    return this.palate.colors[color] ?? 'black';
  }
  private getBorderSize(borderSize: borderSize): string {
    const color = this.palate.colors.border;

    return (this.palate.borderSizes[borderSize] ?? '0') + ' ' + color;
  }
  private getBorderRadius(borderRadius: BorderRadius): string {
    return this.palate.borderRadius[borderRadius] ?? '0';
  }
  private getMarginPadding(marginPadding: MarginPadding): string {
    return this.palate.marginPadding[marginPadding] ?? '0';
  }
  private getZIndex(zIndex: ZIndex): 'auto' | number {
    return this.palate.zIndex[zIndex] ?? 'auto';
  }
  private getGradientStyles(gradient: Gradient): string {
    return this.palate.gradients[gradient] ?? '';
  }
  private getElementStyles(component: Component): TypographyWithBox {
    return this.palate.elements[component] as TypographyWithBox;
  }

  generateCSS(component: Component, props: any): string {
    const element = this.getElementStyles(component);

    let css = '';
    if (element) {
      const {
        $align,
        $color,
        $fontFamily,
        $fontSize,
        $fontStyle,
        $fontWeight,
        $letterSpacing,
        $lineHeight,
        $textDecoration,
        $textTransform,
        $whiteSpace,
        $margin,
        $border,
        /**
         *         // $textOverflow,
        // $padding,
        // $borderRadius,
        // $boxShadow,
        // $width,
        // $height,
        // $minWidth,
        // $minHeight,
        // $maxWidth,
        // $maxHeight,
        // $overflow,
        // $position,
        // $top,
        // $right,
        // $bottom,
        // $left,
        // $zIndex,
         */
      } = element;

      $align && (css += `align: ${$align};`);
      $color && (css += `color: ${$color};`);
      $fontFamily && (css += `font-family: ${$fontFamily};`);
      $fontSize && (css += `font-size: ${$fontSize};`);
      $fontStyle && (css += `font-style: ${$fontStyle};`);
      $fontWeight && (css += `font-weight: ${$fontWeight};`);
      $letterSpacing && (css += `letter-spacing: ${$letterSpacing};`);
      $lineHeight && (css += `line-height: ${$lineHeight};`);
      $textDecoration && (css += `text-decoration: ${$textDecoration};`);
      $textTransform && (css += `text-transform: ${$textTransform};`);
      $whiteSpace && (css += `white-space: ${$whiteSpace};`);
      $margin && (css += `margin: ${this.getMarginPadding($margin)};`);
      $border && (css += `border: ${this.getBorderSize($border)};`);
    }
    const {
      $whiteSpace,
      $align,
      $color,
      $fontFamily,
      $fontSize,
      $fontStyle,
      $fontWeight,
      $gap,
      $letterSpacing,
      $lineHeight,
      $textDecoration,
      $textTransform,
      $direction,
      $justifyContent,
      $alignItems,
      $wrap,
      $columns,
      $rows,
      $autoRows,
      $autoFlow,
      $layout,
      $order,
      $flex,
      $flexGrow,
      $flexShrink,
      $flexBasis,
      $alignSelf,

      $grid,
      $gridAutoColumns,
      $gridAutoFlow,
      $gridAutoRows,
      $gridTemplate,
      $gridTemplateAreas,
      $gridTemplateColumns,
      $gridTemplateRows,

      $gridArea,
      $gridColumn,
      $gridColumnEnd,
      $gridColumnStart,
      $gridRow,
      $gridRowEnd,
      $gridRowStart,
      $margin,
    } = props as Props;

    if ($layout === 'flex' || $layout === 'flex-item' || $layout === 'grid' || $layout === 'grid-item') {
      if ($layout === 'flex') {
        css += `
          display: flex;
          ${$gap ? `gap: ${$gap};` : ''}
          ${$direction ? `flex-direction: ${$direction};` : ''}
          ${$justifyContent ? `justify-content: ${$justifyContent};` : ''}
          ${$alignItems ? `align-items: ${$alignItems};` : ''}
          ${$wrap ? `flex-wrap: ${$wrap};` : ''}
          ${$order ? `order: ${$order};` : ''}
          ${$flexGrow ? `flex-grow: ${$flexGrow};` : ''}
          ${$flexShrink ? `flex-shrink: ${$flexShrink};` : ''}
          ${$flexBasis ? `flex-basis: ${$flexBasis};` : ''}
          ${$alignSelf ? `align-self: ${$alignSelf};` : ''}
        `;
      }
      if ($layout === 'flex-item') {
        css += `
          ${$alignSelf ? `align-self: ${$alignSelf};` : ''}
          ${$flex ? `flex: ${$flex};` : ''}
          ${$order ? `order: ${$order};` : ''}
        `;
      }
      if ($layout === 'grid') {
        css += `
          display: grid;
          ${$gap ? `gap: ${$gap};` : ''}
          ${$columns ? `grid-template-columns: repeat(${$columns}, 1fr);` : ''}
          ${$rows ? `grid-template-rows: repeat(${$rows}, 1fr);` : ''}
          ${$autoRows ? `grid-auto-rows: ${$autoRows};` : ''}
          ${$autoFlow ? `grid-auto-flow: ${$autoFlow};` : ''}
          ${$grid ? `grid: ${$grid};` : ''}
          ${$gridAutoColumns ? `grid-auto-columns: ${$gridAutoColumns};` : ''}
          ${$gridAutoFlow ? `grid-auto-flow: ${$gridAutoFlow};` : ''}
          ${$gridAutoRows ? `grid-auto-rows: ${$gridAutoRows};` : ''}
          ${$gridTemplate ? `grid-template: ${$gridTemplate};` : ''}
          ${$gridTemplateAreas ? `grid-template-areas: ${$gridTemplateAreas};` : ''}
          ${$gridTemplateColumns ? `grid-template-columns: ${$gridTemplateColumns};` : ''}
          ${$gridTemplateRows ? `grid-template-rows: ${$gridTemplateRows};` : ''}
        `;
      }
      if ($layout === 'grid-item') {
        css += `
          ${$gridArea ? `grid-area: ${$gridArea};` : ''}
          ${$gridColumn ? `grid-column: ${$gridColumn};` : ''}
          ${$gridColumnEnd ? `grid-column-end: ${$gridColumnEnd};` : ''}
          ${$gridColumnStart ? `grid-column-start: ${$gridColumnStart};` : ''}
          ${$gridRow ? `grid-row: ${$gridRow};` : ''}
          ${$gridRowEnd ? `grid-row-end: ${$gridRowEnd};` : ''}
          ${$gridRowStart ? `grid-row-start: ${$gridRowStart};` : ''}
        `;
      }
    }

    $align && (css += `align: ${$align};`);
    $color && (css += `color: ${$color};`);
    $fontFamily && (css += `font-family: ${$fontFamily};`);
    $fontSize && (css += `font-size: ${$fontSize};`);
    $fontStyle && (css += `font-style: ${$fontStyle};`);
    $fontWeight && (css += `font-weight: ${$fontWeight};`);
    $letterSpacing && (css += `letter-spacing: ${$letterSpacing};`);
    $lineHeight && (css += `line-height: ${$lineHeight};`);
    $textDecoration && (css += `text-decoration: ${$textDecoration};`);
    $textTransform && (css += `text-transform: ${$textTransform};`);
    $whiteSpace && (css += `white-space: ${$whiteSpace};`);
    $margin && (css += `margin: ${this.getMarginPadding($margin)};`);

    return css;
  }
}
