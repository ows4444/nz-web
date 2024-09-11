import { Theme } from './theme';

export const lightTheme = new Theme()

  .addBorderRadius('none', '0')
  .addBorderRadius('xxs', '0.0625rem')
  .addBorderRadius('xs', '0.25rem')
  .addBorderRadius('sm', '0.5rem')
  .addBorderRadius('md', '0.75rem')
  .addBorderRadius('lg', '1rem')
  .addBorderRadius('xl', '1.5rem')
  .addBorderRadius('xxl', '2rem')
  .addBorderRadius('pill', '4rem')
  .addBorderRadius('circle', '50%')

  .addMarginPadding('xxl', '4rem')
  .addMarginPadding('xl', '2rem')
  .addMarginPadding('lg', '1rem')
  .addMarginPadding('md', '0.75rem')
  .addMarginPadding('sm', '0.5rem')
  .addMarginPadding('xs', '0.25rem')
  .addMarginPadding('xxs', '0.0625rem')

  .addFontSize('xxxl', 64)
  .addFontSize('xxl', 48)
  .addFontSize('xl', 36)
  .addFontSize('lg', 24)
  .addFontSize('md', 16)
  .addFontSize('sm', 14)
  .addFontSize('xs', 12)
  .addFontSize('xxs', 10)
  .addFontSize('resBase', 16)
  .addFontSize('resScale', 1)

  .addFontWeight('thin', 100)
  .addFontWeight('extraLight', 200)
  .addFontWeight('light', 300)
  .addFontWeight('normal', 400)
  .addFontWeight('medium', 500)
  .addFontWeight('semiBold', 600)
  .addFontWeight('bold', 700)
  .addFontWeight('extraBold', 800)
  .addFontWeight('black', 900)

  .addColor('background', '#000000')
  .addColor('text', '#FFFFFF')
  .addColor('primary', '#007bff')
  .addColor('secondary', '#6c757d')
  .addColor('border', '#010101')

  .addFontFamily('default', 'Arial, sans-serif')
  .addFontFamily('primary', 'Bebas Neue, sans-serif')
  .addFontFamily('secondary', 'Roboto, sans-serif')

  .addBorderSize('thin', '0.0625rem solid')
  .addBorderSize('extraLight', '0.25rem solid')
  .addBorderSize('light', '0.5rem solid')
  .addBorderSize('normal', '0.75rem solid')
  .addBorderSize('medium', '1rem solid')
  .addBorderSize('semiBold', '1.5rem solid')
  .addBorderSize('bold', '2rem solid')
  .addBorderSize('extraBold', '3rem solid')

  .addGradientStyles('primary', 'linear-gradient(90deg, #007bff 0%, #017bff 100%)')
  .addGradientStyles('secondary', 'linear-gradient(90deg, #6c757d 0%, #6b757d 100%)')
  .addGradientStyles('success', 'linear-gradient(90deg, #28a745 0%, #26a745 100%)')
  .addGradientStyles('default', 'linear-gradient(90deg, #343a40 0%, #333a40 100%)')
  .addGradientStyles('warning', 'linear-gradient(90deg, #ffc107 0%, #fdc107 100%)')
  .addGradientStyles('info', 'linear-gradient(90deg, #17a2b8 0%, #16a2b8 100%)')
  .addGradientStyles('error', 'linear-gradient(90deg, #dc3545 0%, #db3545 100%)')

  .addZIndex('auto', 'auto')
  .addZIndex('dropdown', 1000)
  .addZIndex('sticky', 1020)
  .addZIndex('fixed', 1030)
  .addZIndex('modal', 1040)
  .addZIndex('popover', 1050)
  .addZIndex('tooltip', 1060)

  .addElementStyles('BUTTON', {
    $border: 'thin',
  })

  .addElementStyles('H1', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xxxl',
    $marginBottom: 'lg',
  })

  .addElementStyles('H2', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xxl',
    $marginBottom: 'lg',
  })

  .addElementStyles('H3', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xl',
    $marginBottom: 'lg',
  })

  .addElementStyles('H4', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'lg',
    $marginBottom: 'lg',
  })

  .addElementStyles('H5', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'md',
    $marginBottom: 'lg',
  })

  .addElementStyles('H6', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'sm',
    $marginBottom: 'lg',
  })

  .addElementStyles('P', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
    $marginBottom: 'md',
  })

  .addElementStyles('A', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
    $marginBottom: 'md',
  })

  .addElementStyles('SPAN', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
    $marginBottom: 'md',
  })

  .addElementStyles('DIV', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
    $marginBottom: 'md',
  });
