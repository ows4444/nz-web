import { ThemeGenerator } from './theme';

export const lightTheme = new ThemeGenerator()
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addElement('INPUT', {
    MIN: {
      xs: { width: '200px' },
      lg: { width: '300px' },
      xl: { width: '400px' },
      xxl: { width: '500px' },
      md: { width: '240px' },
      sm: { width: '220px' },
    },

    MD: {
      xs: { width: '220px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '249px' },
    },

    MAX: {
      xs: { width: '248px' },
      lg: { width: '500px' },
      xl: { width: '600px' },
      xxl: { width: '700px' },
      md: { width: '400px' },
      sm: { width: '220px' },
    },

    LG: {
      xs: { width: '300px' },
      lg: { width: '600px' },
      xl: { width: '700px' },
      xxl: { width: '800px' },
      md: { width: '500px' },
      sm: { width: '400px' },
    },

    XL: {
      xs: { width: '400px' },
      lg: { width: '700px' },
      xl: { width: '800px' },
      xxl: { width: '900px' },
      md: { width: '600px' },
      sm: { width: '500px' },
    },

    XXL: {
      xs: { width: '500px' },
      lg: { width: '800px' },
      xl: { width: '900px' },
      xxl: { width: '1000px' },
      md: { width: '700px' },
      sm: { width: '600px' },
    },

    XS: {
      xs: { width: '220px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '247px' },
    },

    XXS: {
      xs: { width: '200px' },
      lg: { width: '300px' },
      xl: { width: '400px' },
      xxl: { width: '500px' },
      md: { width: '246px' },
      sm: { width: '220px' },
    },

    SM: {
      xs: { width: '245px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '220px' },
    },
  })

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

  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addElement('INPUT', {
    MIN: {
      xs: { width: '200px' },
      lg: { width: '300px' },
      xl: { width: '400px' },
      xxl: { width: '500px' },
      md: { width: '244px' },
      sm: { width: '220px' },
    },

    MD: {
      xs: { width: '220px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '243px' },
    },

    MAX: {
      xs: { width: '244px' },
      lg: { width: '500px' },
      xl: { width: '600px' },
      xxl: { width: '700px' },
      md: { width: '400px' },
      sm: { width: '220px' },
    },

    LG: {
      xs: { width: '300px' },
      lg: { width: '600px' },
      xl: { width: '700px' },
      xxl: { width: '800px' },
      md: { width: '500px' },
      sm: { width: '400px' },
    },

    XL: {
      xs: { width: '400px' },
      lg: { width: '700px' },
      xl: { width: '800px' },
      xxl: { width: '900px' },
      md: { width: '600px' },
      sm: { width: '500px' },
    },

    XXL: {
      xs: { width: '500px' },
      lg: { width: '800px' },
      xl: { width: '900px' },
      xxl: { width: '1000px' },
      md: { width: '700px' },
      sm: { width: '600px' },
    },

    XS: {
      xs: { width: '220px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '242px' },
    },

    XXS: {
      xs: { width: '200px' },
      lg: { width: '300px' },
      xl: { width: '400px' },
      xxl: { width: '500px' },
      md: { width: '241px' },
      sm: { width: '220px' },
    },

    SM: {
      xs: { width: '240px' },
      lg: { width: '400px' },
      xl: { width: '500px' },
      xxl: { width: '600px' },
      md: { width: '300px' },
      sm: { width: '220px' },
    },
  })

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
