import { ThemeGenerator } from './theme';

export const lightTheme = new ThemeGenerator()
  .addGlobalStyles([
    ['BackgroundColor', 'White'],
    ['FontColor', 'Black'],
  ])
  .addPaletteColors('Default', [
    ['BackgroundColor', 'White'],
    ['FontColor', 'Black'],
    ['BorderColor', 'Black'],
  ])

  .addPaletteColors('White', [
    ['FontColor', 'Black'],
    ['BackgroundColor', 'White'],
    ['BorderColor', 'Black'],
  ])
  .addPaletteColors('Black', [
    ['FontColor', 'White'],
    ['BackgroundColor', 'Black'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Primary', [
    ['BackgroundColor', 'Blue'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Secondary', [
    ['BackgroundColor', 'Green'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Success', [
    ['BackgroundColor', 'Green'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Error', [
    ['BackgroundColor', 'Red'],
    ['FontColor', 'White'],
    ['BorderColor', 'Black'],
  ])
  .addPaletteColors('Warning', [
    ['BackgroundColor', 'Yellow'],
    ['FontColor', 'Black'],
    ['BorderColor', 'Black'],
  ])
  .addPaletteColors('Info', [
    ['BackgroundColor', 'LightBlue'],
    ['FontColor', 'Black'],
    ['BorderColor', 'Black'],
  ])
  .getTheme();

export const darkTheme = new ThemeGenerator()
  .addGlobalStyles([
    ['BackgroundColor', 'Black'],
    ['FontColor', 'White'],
  ])
  .addPaletteColors('Default', [
    ['BackgroundColor', 'Black'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('White', [
    ['FontColor', 'White'],
    ['BackgroundColor', 'Black'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Black', [
    ['FontColor', 'Black'],
    ['BackgroundColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Primary', [
    ['BackgroundColor', 'Blue'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Secondary', [
    ['BackgroundColor', 'Green'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Success', [
    ['BackgroundColor', 'Green'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Error', [
    ['BackgroundColor', 'Red'],
    ['FontColor', 'White'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Warning', [
    ['BackgroundColor', 'Yellow'],
    ['FontColor', 'Black'],
    ['BorderColor', 'White'],
  ])
  .addPaletteColors('Info', [
    ['BackgroundColor', 'LightBlue'],
    ['FontColor', 'Black'],
    ['BorderColor', 'White'],
  ])
  .getTheme();
