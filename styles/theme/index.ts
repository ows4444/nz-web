import { ColorGenerator } from './colorGenerator';
import { ColorProperty } from './colorProperties';
import { Color } from './colors';
import { PaletteItem } from './paletteItem';
import { PropertyState } from './propertyStates';
import { Variant } from './variants'; 

export { Variants } from './variants';
export type { Variant } from './variants';

export { Sizes } from './sizes';
export type { Size } from './sizes';

export type factor = number;
export type transparency = number;

export interface Theme {
  palette: Record<Variant, PaletteItem>;
  global: Record<string, any>;
}

export class ThemeGenerator {
  private variantPalette: Record<string, any>;
  private globalStyles: Record<string, any>;
  private readonly cg: ColorGenerator = new ColorGenerator();

  constructor() {
    this.variantPalette = {};
    this.globalStyles = {};
  }

  addPaletteColors(
    variant: Variant,
    payload: Array<
      | [ColorProperty, Color]
      | [ColorProperty, Color, PropertyState]
      | [ColorProperty, Color, PropertyState, factor]
      | [ColorProperty, Color, PropertyState, factor, transparency]
    >,
  ) {
    this.variantPalette[variant] = payload.reduce(
      (acc, [paletteItem, color, propertyState = 'Default', factor = 0, transparency = 1]) => {
        if (propertyState === 'Default') {
          acc[paletteItem] = this.cg.generateRGBA(color, factor, transparency);
        } else {
          acc[`${propertyState}.${paletteItem}`] = this.cg.generateRGBA(color, factor, transparency);
        }
        return acc;
      },
      this.variantPalette[variant] || {},
    );

    return this;
  }

  addGlobalStyles(
    payload: Array<
      | [ColorProperty, Color]
      | [ColorProperty, Color, PropertyState]
      | [ColorProperty, Color, PropertyState, factor]
      | [ColorProperty, Color, PropertyState, factor, transparency]
    >,
  ) {
    payload.forEach(([paletteItem, color, propertyState = 'Default', factor = 0, transparency = 1]) => {
      if (propertyState === 'Default') {
        this.globalStyles[paletteItem] = this.cg.generateRGBA(color, factor, transparency);
      } else {
        this.globalStyles[`${propertyState}.${paletteItem}`] = this.cg.generateRGBA(color, factor, transparency);
      }
    });
    return this;
  }

  public getTheme(): Theme {
    return {
      global: this.globalStyles,
      palette: this.variantPalette,
    };
  }
}
