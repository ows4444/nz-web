import { Color } from './colors';
import { FontWeight, LineHight, RadiusSize, ShadowSize, Size, TransitionSize } from './sizes';
import { Gradient, Variant } from './variants';
import { Component } from './components';
import { CSSProperty, TransformName } from './cssProperties';
import { LayoutProps } from '@components/types';

export interface Theme {
  palette: Partial<Record<Variant, Color>>;
  mediaSizes: Partial<Record<Size, string>>;
  fontSizes: Partial<Record<FontWeight, string>>;
  radiusSizes: Partial<Record<RadiusSize, string>>;
  shadowSizes: Partial<Record<ShadowSize, string>>;
  gradients: Partial<Record<Gradient, string>>;
  lineHights: Partial<Record<LineHight, string>>;
  transition: Partial<Record<TransitionSize, string>>;
  elements: Partial<Record<Component, Partial<Record<CSSProperty, string>>>>;

  // eslint-disable-next-line no-unused-vars
  generateCSS: (element: Component, props: any) => string;
}

export class ThemeGenerator {
  private palette: Partial<Record<Variant, Color>>;
  private mediaSizes: Partial<Record<Size, string>>;
  private fontSizes: Partial<Record<FontWeight, string>>;
  private radiusSizes: Partial<Record<RadiusSize, string>>;
  private shadowSizes: Partial<Record<ShadowSize, string>>;
  private gradients: Partial<Record<Gradient, string>>;
  private lineHights: Partial<Record<LineHight, string>>;
  private transition: Partial<Record<TransitionSize, string>>;
  private elements: Partial<Record<Component, Partial<Record<CSSProperty, string>>>>;

  constructor() {
    this.elements = {};
    this.palette = {};
    this.mediaSizes = {};
    this.fontSizes = {};
    this.radiusSizes = {};
    this.shadowSizes = {};
    this.gradients = {};
    this.lineHights = {};
    this.transition = {};
  }

  addElementStyle(element: Component, cssProperty: CSSProperty, value: string): ThemeGenerator {
    if (!this.elements[element]) {
      this.elements[element] = {};
    }
    this.elements[element][cssProperty] = value;
    return this;
  }

  generateCSS(element: Component, props: any): string {
    const CurrentElement = this.elements[element] as Record<string, any>;

    let css = '';

    if (CurrentElement) {
      css = Object.keys(CurrentElement).reduce(
        (acc: string, cssProperty: string) =>
          `${acc}${TransformName(cssProperty as CSSProperty)}: ${CurrentElement[cssProperty]};`,
        css,
      );
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
    } = props as LayoutProps;

    if ($layout === 'flex' || $layout === 'grid') {
      if ($layout === 'flex') {
        css += `
          display: flex;
          gap: ${$gap || '0'};
          flex-direction: ${$direction || 'row'};
          justify-content: ${$justifyContent || 'center'};
          align-items: ${$alignItems || 'center'};
          flex-wrap: ${$wrap || 'nowrap'};
        `;
      }
      if ($layout === 'grid') {
        css += `
          display: grid;
          gap: ${$gap || '0'};
          grid-template-columns: repeat(${$columns || 1}, 1fr);
          grid-template-rows: repeat(${$rows || 1}, 1fr);
          grid-auto-rows: ${$autoRows || 'auto'};
          grid-auto-flow: ${$autoFlow || 'row'};
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

    return css;
  }

  addTransitionSize(transitionSize: TransitionSize, value: string): this {
    this.transition[transitionSize] = value;
    return this;
  }

  addLineHight(lineHight: LineHight, value: string): this {
    this.lineHights[lineHight] = value;
    return this;
  }

  addGradientStyles(gradient: Gradient, value: string): this {
    this.gradients[gradient] = value;
    return this;
  }

  addPaletteStyles(variant: Variant, color: Color): this {
    this.palette[variant] = color;
    return this;
  }

  addMediaSize(size: Size, value: string): this {
    this.mediaSizes[size] = value;
    return this;
  }

  addRadiusSize(radiusSize: RadiusSize, value: string): this {
    this.radiusSizes[radiusSize] = value;
    return this;
  }

  addFontWeight(fontWeight: FontWeight, value: string): this {
    this.fontSizes[fontWeight] = value;
    return this;
  }

  addShadowSize(shadowSize: ShadowSize, value: string): this {
    this.shadowSizes[shadowSize] = value;
    return this;
  }
  public theme(): Theme {
    return {
      generateCSS: (element, props) => this.generateCSS(element, props),
      elements: this.elements,
      transition: this.transition,
      palette: this.palette,
      mediaSizes: this.mediaSizes,
      fontSizes: this.fontSizes,
      radiusSizes: this.radiusSizes,
      shadowSizes: this.shadowSizes,
      gradients: this.gradients,
      lineHights: this.lineHights,
    };
  }
}
