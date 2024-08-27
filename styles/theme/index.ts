import { Color } from './colors';
import { FontWeight, LineHight, RadiusSize, ShadowSize, Size, TransitionSize } from './sizes';
import { Gradient, Variant } from './variants';
import { Component } from './components';
import { CSSProperty, TransformName } from './cssProperties';

export type factor = number;
export type transparency = number;

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
    const { $layout, $direction, $justifyContent, $alignItems, $wrap, $columns, $autoRows, $autoFlow, $rows } = props;

    if ($layout === 'flex' || $layout === 'grid') {
      if ($layout === 'flex') {
        css += `
          display: flex;
          flex-direction: ${$direction || 'row'};
          justify-content: ${$justifyContent || 'center'};
          align-items: ${$alignItems || 'center'};
          flex-wrap: ${$wrap || 'nowrap'};
        `;
      }
      if ($layout === 'grid') {
        css += `
          display: grid;
          grid-template-columns: repeat(${$columns || 1}, 1fr);
          grid-template-rows: repeat(${$rows || 1}, 1fr);
          grid-auto-rows: ${$autoRows || 'auto'};
          grid-auto-flow: ${$autoFlow || 'row'};
        `;
      }
    }

    return css;
  }

  addTransitionSize(transitionSize: TransitionSize, value: string): ThemeGenerator {
    this.transition[transitionSize] = value;
    return this;
  }

  addLineHight(lineHight: LineHight, value: string): ThemeGenerator {
    this.lineHights[lineHight] = value;
    return this;
  }

  addGradientStyles(gradient: Gradient, value: string): ThemeGenerator {
    this.gradients[gradient] = value;
    return this;
  }

  addPaletteStyles(variant: Variant, color: Color): ThemeGenerator {
    this.palette[variant] = color;
    return this;
  }

  addMediaSize(size: Size, value: string): ThemeGenerator {
    this.mediaSizes[size] = value;
    return this;
  }

  addRadiusSize(radiusSize: RadiusSize, value: string): ThemeGenerator {
    this.radiusSizes[radiusSize] = value;
    return this;
  }

  addFontWeight(fontWeight: FontWeight, value: string): ThemeGenerator {
    this.fontSizes[fontWeight] = value;
    return this;
  }

  addShadowSize(shadowSize: ShadowSize, value: string): ThemeGenerator {
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
