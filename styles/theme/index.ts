import { Color } from './colors';
import { FontWeight, LineHight, RadiusSize, ShadowSize, Size, TransitionSize } from './sizes';
import { Gradient, Variant } from './variants';

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

  //elements: Record<Component, Partial<Record<Size, Partial<Record<MediaSize, Partial<Record<ElementCss, string>>>>>>>;
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
  constructor() {
    this.palette = {};
    this.mediaSizes = {};
    this.fontSizes = {};
    this.radiusSizes = {};
    this.shadowSizes = {};
    this.gradients = {};
    this.lineHights = {};
    this.transition = {};
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
