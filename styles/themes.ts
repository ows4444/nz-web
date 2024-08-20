import { ThemeGenerator } from './theme';

export const lightTheme = new ThemeGenerator()
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addElement('INPUT', {
    MIN: { xs: '200px', sm: '220px', md: '240px', lg: '300px', xl: '400px', xxl: '500px' },
    MD: { xs: '220px', sm: '240px', md: '300px', lg: '400px', xl: '500px', xxl: '600px' },
    MAX: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%', xxl: '100%' },
    LG: { xs: '300px', sm: '400px', md: '500px', lg: '600px', xl: '700px', xxl: '800px' },
    XL: { xs: '400px', sm: '500px', md: '600px', lg: '700px', xl: '800px', xxl: '900px' },
    XXL: { xs: '500px', sm: '600px', md: '700px', lg: '800px', xl: '900px', xxl: '1000px' },
    XS: { xs: '220px', sm: '240px', md: '300px', lg: '400px', xl: '500px', xxl: '600px' },
    XXS: { xs: '200px', sm: '220px', md: '240px', lg: '300px', xl: '400px', xxl: '500px' },
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
    MIN: { xs: '200px', sm: '220px', md: '240px', lg: '300px', xl: '400px', xxl: '500px' },
    MD: { xs: '220px', sm: '240px', md: '300px', lg: '400px', xl: '500px', xxl: '600px' },
    MAX: { xs: '240px', sm: '300px', md: '400px', lg: '500px', xl: '600px', xxl: '700px' },
    LG: { xs: '300px', sm: '400px', md: '500px', lg: '600px', xl: '700px', xxl: '800px' },
    XL: { xs: '400px', sm: '500px', md: '600px', lg: '700px', xl: '800px', xxl: '900px' },
    XXL: { xs: '500px', sm: '600px', md: '700px', lg: '800px', xl: '900px', xxl: '1000px' },
    XS: { xs: '220px', sm: '240px', md: '300px', lg: '400px', xl: '500px', xxl: '600px' },
    XXS: { xs: '200px', sm: '220px', md: '240px', lg: '300px', xl: '400px', xxl: '500px' },
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
