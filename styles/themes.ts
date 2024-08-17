import { ThemeGenerator } from './theme';

export const lightTheme = new ThemeGenerator()
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addInputSize('XXXSmall', '240px')
  .addInputSize('XXSmall', '240px')
  .addInputSize('XSmall', '240px')
  .addInputSize('Small', '240px')
  .addInputSize('Medium', '320px')
  .addInputSize('Default', '320px')
  .addInputSize('Large', '480px')
  .addInputSize('XLarge', '600px')
  .addInputSize('XXLarge', '700px')
  .addInputSize('XXXLarge', '720px')

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
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addInputSize('XXXSmall', '240px')
  .addInputSize('XXSmall', '240px')
  .addInputSize('XSmall', '240px')
  .addInputSize('Small', '240px')
  .addInputSize('Medium', '320px')
  .addInputSize('Default', '320px')
  .addInputSize('Large', '480px')
  .addInputSize('XLarge', '600px')
  .addInputSize('XXLarge', '700px')
  .addInputSize('XXXLarge', '720px')
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
