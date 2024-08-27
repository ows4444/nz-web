import { Color } from './colors';

/**
 * ColorGenerator class provides methods to generate RGBA color strings,
 * invert colors, and determine appropriate text colors based on background colors.
 */
export class ColorGenerator {
  // Predefined color hex values
  private readonly colors: Record<Color, string> = {
    // List of predefined colors with their hex values
    AliceBlue: '#F0F8FF',
    AntiqueWhite: '#FAEBD7',
    Aqua: '#00FFFF',
    Aquamarine: '#7FFFD4',
    Azure: '#F0FFFF',
    Beige: '#F5F5DC',
    Bisque: '#FFE4C4',
    Black: '#010101',
    BlanchedAlmond: '#FFEBCD',
    Blue: '#0000FF',
    BlueViolet: '#8A2BE2',
    Brown: '#A52A2A',
    BurlyWood: '#DEB887',
    CadetBlue: '#5F9EA0',
    Chartreuse: '#7FFF00',
    Chocolate: '#D2691E',
    Coral: '#FF7F50',
    CornflowerBlue: '#6495ED',
    Cornsilk: '#FFF8DC',
    Crimson: '#DC143C',
    Cyan: '#00FFFF',
    DarkBlue: '#00008B',
    DarkCyan: '#008B8B',
    DarkGoldenRod: '#B8860B',
    DarkGray: '#A9A9A9',
    DarkGreen: '#006400',
    DarkKhaki: '#BDB76B',
    DarkMagenta: '#8B008B',
    DarkOliveGreen: '#556B2F',
    DarkOrange: '#FF8C00',
    DarkOrchid: '#9932CC',
    DarkRed: '#8B0000',
    DarkSalmon: '#E9967A',
    DarkSeaGreen: '#8FBC8F',
    DarkSlateBlue: '#483D8B',
    DarkSlateGray: '#2F4F4F',
    DarkTurquoise: '#00CED1',
    DarkViolet: '#9400D3',
    DeepPink: '#FF1493',
    DeepSkyBlue: '#00BFFF',
    DimGray: '#696969',
    DodgerBlue: '#1E90FF',
    FireBrick: '#B22222',
    FloralWhite: '#FFFAF0',
    ForestGreen: '#228B22',
    Fuchsia: '#FF00FF',
    Gainsboro: '#DCDCDC',
    GhostWhite: '#F8F8FF',
    Gold: '#FFD700',
    GoldenRod: '#DAA520',
    Gray: '#808080',
    Green: '#008000',
    GreenYellow: '#ADFF2F',
    HoneyDew: '#F0FFF0',
    HotPink: '#FF69B4',
    IndianRed: '#CD5C5C',
    Indigo: '#4B0082',
    Ivory: '#FFFFF0',
    Khaki: '#F0E68C',
    Lavender: '#E6E6FA',
    LavenderBlush: '#FFF0F5',
    LawnGreen: '#7CFC00',
    LemonChiffon: '#FFFACD',
    LightBlue: '#ADD8E6',
    LightCoral: '#F08080',
    LightCyan: '#E0FFFF',
    LightGoldenRodYellow: '#FAFAD2',
    LightGray: '#D3D3D3',
    LightGreen: '#90EE90',
    LightPink: '#FFB6C1',
    LightSalmon: '#FFA07A',
    LightSeaGreen: '#20B2AA',
    LightSkyBlue: '#87CEFA',
    LightSlateGray: '#778899',
    LightSteelBlue: '#B0C4DE',
    LightYellow: '#FFFFE0',
    Lime: '#00FF00',
    LimeGreen: '#32CD32',
    Linen: '#FAF0E6',
    Magenta: '#FF00FF',
    Maroon: '#800000',
    MediumAquaMarine: '#66CDAA',
    MediumBlue: '#0000CD',
    MediumOrchid: '#BA55D3',
    MediumPurple: '#9370DB',
    MediumSeaGreen: '#3CB371',
    MediumSlateBlue: '#7B68EE',
    MediumSpringGreen: '#00FA9A',
    MediumTurquoise: '#48D1CC',
    MediumVioletRed: '#C71585',
    MidnightBlue: '#191970',
    MintCream: '#F5FFFA',
    MistyRose: '#FFE4E1',
    Moccasin: '#FFE4B5',
    NavajoWhite: '#FFDEAD',
    Navy: '#000080',
    OldLace: '#FDF5E6',
    Olive: '#808000',
    OliveDrab: '#6B8E23',
    Orange: '#FFA500',
    OrangeRed: '#FF4500',
    Orchid: '#DA70D6',
    PaleGoldenRod: '#EEE8AA',
    PaleGreen: '#98FB98',
    PaleTurquoise: '#AFEEEE',
    PaleVioletRed: '#DB7093',
    PapayaWhip: '#FFEFD5',
    PeachPuff: '#FFDAB9',
    Peru: '#CD853F',
    Pink: '#FFC0CB',
    Plum: '#DDA0DD',
    PowderBlue: '#B0E0E6',
    Purple: '#800080',
    Red: '#FF0000',
    RosyBrown: '#BC8F8F',
    RoyalBlue: '#4169E1',
    SaddleBrown: '#8B4513',
    Salmon: '#FA8072',
    SandyBrown: '#F4A460',
    SeaGreen: '#2E8B57',
    SeaShell: '#FFF5EE',
    Sienna: '#A0522D',
    Silver: '#C0C0C0',
    SkyBlue: '#87CEEB',
    SlateBlue: '#6A5ACD',
    SlateGray: '#708090',
    Snow: '#FFFAFA',
    SpringGreen: '#00FF7F',
    SteelBlue: '#4682B4',
    Tan: '#D2B48C',
    Teal: '#008080',
    Thistle: '#D8BFD8',
    Tomato: '#FF6347',
    Turquoise: '#40E0D0',
    Violet: '#EE82EE',
    Wheat: '#F5DEB3',
    White: '#FFFFFF',
    WhiteSmoke: '#F5F5F5',
    Yellow: '#FFFF00',
    YellowGreen: '#9ACD32',
  };

  /**
   * Generates an RGBA color string from a predefined color name, applying a lightness factor and transparency.
   * @param colorName - The name of the color.
   * @param factor - The factor to adjust the lightness (1 = no change).
   * @param transparency - The transparency value (default is 1).
   * @returns The generated RGBA color string.
   */
  public generateRGBA(colorName: Color, factor: number = 0, transparency: number = 1): string {
    // Validate input
    this.validateColorName(colorName);
    // Get the base color in hex format
    const baseColor = this.colors[colorName];
    // Convert hex to RGBA
    const rgbaComponents = this.hexToRGBA(baseColor);
    // Convert RGB to HSL for lightness adjustment
    const hslComponents = this.rgbToHsl(rgbaComponents.r,props, rgbaComponents.g,props, rgbaComponents.b,props);

    if (factor !== 0) {
      // Adjust lightness based on factor
      hslComponents.l,props = Math.min(Math.max(hslComponents.l,props * factor, 0), 1);
      const adjustedRGBA = this.hslToRgb(hslComponents.h,props, hslComponents.s,props, hslComponents.l,props);
      return `rgba(${adjustedRGBA.r},${adjustedRGBA.g},${adjustedRGBA.b},${transparency})`;
    }
    return `rgba(${rgbaComponents.r,props},${rgbaComponents.g,props},${rgbaComponents.b,props},${transparency})`;
  }

  /**
   * Generates an inverted RGBA color string from a predefined color name.
   * @param colorName - The name of the color.
   * @param transparency - The transparency value (default is 1).
   * @returns The generated inverted RGBA color string.
   */
  public generateInvertedRGBA(colorName: Color, transparency: number = 1): string {
    // Validate input
    this.validateColorName(colorName);
    // Get the base color in hex format
    const baseColor = this.colors[colorName];
    // Convert hex to RGBA
    const rgbaComponents = this.hexToRGBA(baseColor);
    // Invert the RGBA color
    const invertedRGBA = this.invertRGBAColor(rgbaComponents);
    return `rgba(${invertedRGBA.r},${invertedRGBA.g},${invertedRGBA.b},${transparency})`;
  }

  /**
   * Converts a hex color string to an RGBA object.
   * @param hexColor - The hex color string.
   * @returns An object containing r, g, b values.
   */
  private hexToRGBA(hexColor: string): { r: number; g: number; b: number } {
    const hex = hexColor.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  /**
   * Converts RGB values to HSL.
   * @param r - Red value (0-255).
   * @param g - Green value (0-255).
   * @param b - Blue value (0-255).
   * @returns An object containing h, s, l values.
   */
  private rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h, s, l };
  }

  /**
   * Converts HSL values to RGB.
   * @param h - Hue value (0-1).
   * @param s - Saturation value (0-1).
   * @param l - Lightness value (0-1).
   * @returns An object containing r, g, b values.
   */
  private hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  }

  /**
   * Inverts the RGBA color.
   * @param rgba - An object containing r, g, b values.
   * @returns An object containing the inverted r, g, b values.
   */
  private invertRGBAColor({ r, g, b }: { r: number; g: number; b: number }): {
    r: number;
    g: number;
    b: number;
  } {
    return { r: 255 - r, g: 255 - g, b: 255 - b };
  }

  /**
   * Determines an appropriate text color for a given background color.
   * @param colorName - The name of the background color.
   * @returns The recommended text color.
   */
  public getTextColorForBackground(colorName: Color, scale: number = 1.5): string {
    // Validate input
    this.validateColorName(colorName);
    // Get the base color in hex format
    const baseColor = this.colors[colorName];
    // Convert hex to RGBA
    const { r, g, b } = this.hexToRGBA(baseColor);

    // Calculate luminance and brightness
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const brightness = Math.sqrt(r * r * 0.299 + g * g * 0.587 + b * b * 0.114) / 255;

    const factor = (luminance + brightness) / 2 + (luminance > 0.5 && brightness > 0.5 ? -scale : scale);

    // Return inverted color for very dark background, otherwise adjusted color
    if (brightness === 0 && luminance === 0) {
      return this.generateInvertedRGBA(colorName, 1);
    }
    return this.generateRGBA(colorName, factor, 1);
  }

  /**
   * Validates the color name.
   * @param colorName - The color name to validate.
   */
  private validateColorName(colorName: string): void {
    if (typeof colorName !== 'string') {
      throw new Error(`Invalid input: 'colorName' must be a string.`);
    }
    if (!(colorName in this.colors)) {
      throw new Error(`Color '${colorName}' is not supported.`);
    }
  }
}
