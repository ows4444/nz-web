import { ThemeGenerator } from './theme';

export const lightTheme = new ThemeGenerator()
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

  .addPaletteStyles('White', 'White')
  .addPaletteStyles('Black', 'Black')

  .addFontWeight('thin', '100')
  .addFontWeight('extraLight', '200')
  .addFontWeight('light', '300')
  .addFontWeight('normal', '400')
  .addFontWeight('medium', '500')
  .addFontWeight('semiBold', '600')
  .addFontWeight('bold', '700')
  .addFontWeight('extraBold', '800')
  .addFontWeight('black', '900')

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

  .addTransitionSize('all', 'all 0.3s ease-in-out')
  .addTransitionSize('xs', '0.2s')
  .addTransitionSize('sm', '0.3s')
  .addTransitionSize('md', '0.5s')
  .addTransitionSize('lg', '0.75s')
  .addTransitionSize('xl', '1s')
  .addTransitionSize('xxl', '1.5s')

  .addRadiusSize('pill', '50px')
  .addRadiusSize('circle', '50%')
  .addRadiusSize('none', '0')
  .addRadiusSize('xxs', '2px')
  .addRadiusSize('xs', '4px')
  .addRadiusSize('sm', '8px')
  .addRadiusSize('md', '16px')
  .addRadiusSize('lg', '24px')
  .addRadiusSize('xl', '32px')
  .addRadiusSize('xxl', '48px')


  .addElementStyle('P', 'fontSize', '1rem')
  .addElementStyle('H1', 'fontSize', '2rem')
  .addElementStyle('H2', 'fontSize', '1.5rem')
  .addElementStyle('H3', 'fontSize', '1.17rem')
  .addElementStyle('H4', 'fontSize', '1rem')
  .addElementStyle('H5', 'fontSize', '0.83rem')
  .addElementStyle('H6', 'fontSize', '0.67rem')

  .addElementStyle('BUTTON', 'border', '1px solid')
  .addElementStyle('BUTTON', 'borderRadius', '4px')
  .addElementStyle('BUTTON', 'padding', '8px 16px')

  .addElementStyle('INPUT', 'border', '1px solid')
  .addElementStyle('INPUT', 'borderRadius', '4px')
  .addElementStyle('INPUT', 'padding', '4px 8px')

  .addElementStyle('LABEL', 'color', 'black')
  .addElementStyle('LABEL', 'fontSize', '16px') 
  .addElementStyle('LABEL', 'lineHeight', '1.5')
  .addElementStyle('LABEL', 'padding', '8px')

  .addElementStyle('CARD', 'border', '1px solid grey')
  .addElementStyle('CARD', 'padding', '4px 0')

  .addElementStyle('CARD_HEADER', 'padding', '2px 4px')
  .addElementStyle('CARD_HEADER', 'fontSize', '24px')
 
   
  .addElementStyle('CARD_BODY', 'border', '0px 1px solid grey') 
  .addElementStyle('CARD_BODY', 'padding', '2px 4px')
 
  .addElementStyle('CARD_FOOTER', 'padding', '2px 4px')

  .theme();

export const darkTheme = new ThemeGenerator()

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

  .addFontWeight('thin', '100')
  .addFontWeight('extraLight', '200')
  .addFontWeight('light', '300')
  .addFontWeight('normal', '400')
  .addFontWeight('medium', '500')
  .addFontWeight('semiBold', '600')
  .addFontWeight('bold', '700')
  .addFontWeight('extraBold', '800')
  .addFontWeight('black', '900')

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

  .addTransitionSize('all', 'all 0.3s ease-in-out')
  .addTransitionSize('xs', '0.2s')
  .addTransitionSize('sm', '0.3s')
  .addTransitionSize('md', '0.5s')
  .addTransitionSize('lg', '0.75s')
  .addTransitionSize('xl', '1s')
  .addTransitionSize('xxl', '1.5s')

  .addRadiusSize('pill', '50px')
  .addRadiusSize('circle', '50%')
  .addRadiusSize('none', '0')
  .addRadiusSize('xxs', '2px')
  .addRadiusSize('xs', '4px')
  .addRadiusSize('sm', '8px')
  .addRadiusSize('md', '16px')
  .addRadiusSize('lg', '24px')
  .addRadiusSize('xl', '32px')
  .addRadiusSize('xxl', '48px')
  .theme();
