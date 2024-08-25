import { Color } from './colors';
import { FontWeight, LineHight, RadiusSize, ShadowSize, Size } from './sizes';
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

  //elements: Record<Component, Partial<Record<Size, Partial<Record<MediaSize, Partial<Record<ElementCss, string>>>>>>>;
}

export class ThemeGenerator {
  private readonly _theme: Theme;
  constructor() {
    this._theme = {
      lineHights: {},
      gradients: {},
      shadowSizes: {},
      radiusSizes: {},
      fontSizes: {},
      palette: {},
      mediaSizes: {},
    };
  }
  addLineHight(lineHight: LineHight, value: string): ThemeGenerator {
    this._theme.lineHights[lineHight] = value;
    return this;
  }

  addGradientStyles(gradient: Gradient, value: string): ThemeGenerator {
    this._theme.gradients[gradient] = value;
    return this;
  }

  addPaletteStyles(variant: Variant, color: Color): ThemeGenerator {
    this._theme.palette[variant] = color;
    return this;
  }

  addMediaSize(size: Size, value: string): ThemeGenerator {
    this._theme.mediaSizes[size] = value;
    return this;
  }

  addRadiusSize(radiusSize: RadiusSize, value: string): ThemeGenerator {
    this._theme.radiusSizes[radiusSize] = value;
    return this;
  }

  addFontSize(fontWeight: FontWeight, value: string): ThemeGenerator {
    this._theme.fontSizes[fontWeight] = value;
    return this;
  }

  addShadowSize(shadowSize: ShadowSize, value: string): ThemeGenerator {
    this._theme.shadowSizes[shadowSize] = value;
    return this;
  }

  get theme(): Theme {
    return this._theme;
  }
}
