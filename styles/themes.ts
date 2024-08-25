import { ThemeGenerator } from './theme';



console.log('ThemeGenerator',  new ThemeGenerator());

export const lightTheme = {};

//new ThemeGenerator()
/* .addMediaSize('xxs', '200px')
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addPaletteStyles('Primary', 'Blue')
  .addPaletteStyles('Secondary', 'Green')
  .addPaletteStyles('Info', 'LightBlue')

  .addPaletteStyles('Success', 'Green')
  .addPaletteStyles('Warning', 'Yellow')
  .addPaletteStyles('Error', 'Red')

  .addPaletteStyles('Default', 'Gray')

  .addPaletteStyles('White', 'White')
  .addPaletteStyles('Black', 'Black')

  .addFontSize('thin', '100')
  .addFontSize('extraLight', '200')
  .addFontSize('light', '300')
  .addFontSize('normal', '400')
  .addFontSize('medium', '500')
  .addFontSize('semiBold', '600')
  .addFontSize('bold', '700')
  .addFontSize('extraBold', '800')
  .addFontSize('black', '900')

  .addShadowSize('none', 'none')
  .addShadowSize('xxs', '2px')
  .addShadowSize('xs', '4px')
  .addShadowSize('sm', '8px')
  .addShadowSize('md', '16px')
  .addShadowSize('lg', '24px')
  .addShadowSize('xl', '32px')
  .addShadowSize('xxl', '48px')
  .addShadowSize('inset', 'inset')

  .addGradientStyles('Primary', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')
  .addGradientStyles('Secondary', 'linear-gradient(90deg, #A8BFFF 0%, #884D80 100%)')
  .addGradientStyles('Info', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addGradientStyles('Success', 'linear-gradient(90deg, #A8BFFF 0%, #884D80 100%)')
  .addGradientStyles('Warning', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')
  .addGradientStyles('Error', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addGradientStyles('Default', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addLineHight('loose', '1.75')
  .addLineHight('normal', '1.5')
  .addLineHight('tight', ' 1.2')
  .addLineHight('responsiveBase', '1.5')
  .addLineHight('responsiveScale', '1.1')

  .addRadiusSize('pill', '50px')
  .addRadiusSize('circle', '50%')
  .addRadiusSize('none', '0')
  .addRadiusSize('xxs', '2px')
  .addRadiusSize('xs', '4px')
  .addRadiusSize('sm', '8px')
  .addRadiusSize('md', '16px')
  .addRadiusSize('lg', '24px')
  .addRadiusSize('xl', '32px')
  .addRadiusSize('xxl', '48px')*/
//.theme();

export const darkTheme = {};
/*

  .addMediaSize('xxs', '200px')
  .addMediaSize('xs', '320px')
  .addMediaSize('sm', '480px')
  .addMediaSize('md', '768px')
  .addMediaSize('lg', '992px')
  .addMediaSize('xl', '1200px')
  .addMediaSize('xxl', '1600px')

  .addPaletteStyles('Primary', 'Blue')
  .addPaletteStyles('Secondary', 'Green')
  .addPaletteStyles('Info', 'LightBlue')

  .addPaletteStyles('Success', 'Green')
  .addPaletteStyles('Warning', 'Yellow')
  .addPaletteStyles('Error', 'Red')

  .addPaletteStyles('Default', 'Gray')

  .addPaletteStyles('White', 'Black')
  .addPaletteStyles('Black', 'White')

  .addFontSize('thin', '100')
  .addFontSize('extraLight', '200')
  .addFontSize('light', '300')
  .addFontSize('normal', '400')
  .addFontSize('medium', '500')
  .addFontSize('semiBold', '600')
  .addFontSize('bold', '700')
  .addFontSize('extraBold', '800')
  .addFontSize('black', '900')

  .addShadowSize('none', 'none')
  .addShadowSize('xxs', '2px')
  .addShadowSize('xs', '4px')
  .addShadowSize('sm', '8px')
  .addShadowSize('md', '16px')
  .addShadowSize('lg', '24px')
  .addShadowSize('xl', '32px')
  .addShadowSize('xxl', '48px')
  .addShadowSize('inset', 'inset')

  .addGradientStyles('Primary', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')
  .addGradientStyles('Secondary', 'linear-gradient(90deg, #A8BFFF 0%, #884D80 100%)')
  .addGradientStyles('Info', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addGradientStyles('Success', 'linear-gradient(90deg, #A8BFFF 0%, #884D80 100%)')
  .addGradientStyles('Warning', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')
  .addGradientStyles('Error', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addGradientStyles('Default', 'linear-gradient(90deg, #FFC371 0%, #FF5F6D 100%)')

  .addLineHight('loose', '1.75')
  .addLineHight('normal', '1.5')
  .addLineHight('tight', ' 1.2')
  .addLineHight('responsiveBase', '1.5')
  .addLineHight('responsiveScale', '1.1')

  .addRadiusSize('pill', '50px')
  .addRadiusSize('circle', '50%')
  .addRadiusSize('none', '0')
  .addRadiusSize('xxs', '2px')
  .addRadiusSize('xs', '4px')
  .addRadiusSize('sm', '8px')
  .addRadiusSize('md', '16px')
  .addRadiusSize('lg', '24px')
  .addRadiusSize('xl', '32px')
  .addRadiusSize('xxl', '48px')*/
// .theme;
