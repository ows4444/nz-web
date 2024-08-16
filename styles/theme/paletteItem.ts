import { Color } from './colors';

export interface PaletteItem {
  FontColor: Color;
  BackgroundColor: Color;
  BorderColor: Color;
  'Hover.FontColor': Color;
  'Hover.BackgroundColor': Color;
  'Hover.BorderColor': Color;
  'Active.FontColor': Color;
  'Active.BackgroundColor': Color;
  'Active.BorderColor': Color;
  'Disabled.FontColor': Color;
  'Disabled.BackgroundColor': Color;
  'Disabled.BorderColor': Color;
  'Focus.FontColor': Color;
  'Focus.BackgroundColor': Color;
  'Focus.BorderColor': Color;
}

export type PaletteType = keyof PaletteItem;
