import { Theme } from './theme';

export const lightTheme = new Theme()

  .addMediaSize('xs', 320)
  .addMediaSize('sm', 576)
  .addMediaSize('md', 768)
  .addMediaSize('lg', 992)
  .addMediaSize('xl', 1200)
  .addMediaSize('xxl', 1400)
  .addMediaSize('xxxl', 1600)

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

  .addFontSize('xxxl', 64)
  .addFontSize('xxl', 48)
  .addFontSize('xl', 36)
  .addFontSize('lg', 24)
  .addFontSize('md', 16)
  .addFontSize('sm', 14)
  .addFontSize('xs', 12)
  .addFontSize('xxs', 10)

  .addFontWeight('thin', 100)
  .addFontWeight('extraLight', 200)
  .addFontWeight('light', 300)
  .addFontWeight('normal', 400)
  .addFontWeight('medium', 500)
  .addFontWeight('semiBold', 600)
  .addFontWeight('bold', 700)
  .addFontWeight('extraBold', 800)
  .addFontWeight('black', 900)

  .addColor('primary', '#007bff')
  .addColor('secondary', '#6c757d')
  .addColor('black', '#000000')
  .addColor('white', '#ffffff')
  .addColor('textPrimary', '#212529')
  .addColor('textSecondary', '#6c757d')
  .addColor('textTertiary', '#adb5bd')
  .addColor('background', '#f8f9fa')
  .addColor('backgroundLight', '#ffffff')
  .addColor('backgroundDark', '#343a40')
  .addColor('border', '#dee2e6')
  .addColor('borderLight', '#e9ecef')
  .addColor('borderDark', '#ced4da')
  .addColor('grey', '#6c757d')
  .addColor('lightGrey', '#f8f9fa')
  .addColor('darkGrey', '#343a40')
  .addColor('grey100', '#f8f9fa')
  .addColor('grey200', '#e9ecef')
  .addColor('grey300', '#dee2e6')
  .addColor('grey400', '#ced4da')
  .addColor('grey500', '#adb5bd')
  .addColor('grey600', '#6c757d')
  .addColor('grey700', '#495057')
  .addColor('grey800', '#343a40')
  .addColor('grey900', '#212529')
  .addColor('error', '#dc3545')
  .addColor('warning', '#ffc107')
  .addColor('info', '#17a2b8')
  .addColor('success', '#28a745')
  .addColor('customPrimaryLight', '#66b2ff')
  .addColor('customPrimaryDark', '#0056b3')
  .addColor('customSecondaryLight', '#bfc9d9')
  .addColor('customSecondaryDark', '#4a5568')
  .addColor('customAccent', '#ff4081')
  .addColor('highlight', '#ffea00')
  .addColor('shadow', '#6d6d6d')
  .addColor('blue', '#007bff')
  .addColor('lightBlue', '#87ceeb')
  .addColor('darkBlue', '#00509e')
  .addColor('red', '#dc3545')
  .addColor('lightRed', '#ff6f6f')
  .addColor('darkRed', '#b22222')
  .addColor('green', '#28a745')
  .addColor('lightGreen', '#90ee90')
  .addColor('darkGreen', '#006400')
  .addColor('yellow', '#ffc107')
  .addColor('lightYellow', '#ffec8b')
  .addColor('darkYellow', '#ffb800')

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
    $border: '1px solid',
  })

  .addElementStyles('INPUT', {
    $height: '2rem',
    $width: '10rem',
    $borderRadius: '0.5rem',
    $paddingLeft: '0.5rem',
  })

  .addElementStyles('H1', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xxxl',
  })

  .addElementStyles('H2', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xxl',
  })

  .addElementStyles('H3', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'xl',
  })

  .addElementStyles('H4', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'lg',
  })

  .addElementStyles('H5', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'md',
  })

  .addElementStyles('H6', {
    $fontFamily: 'primary',
    $fontWeight: 'bold',
    $fontSize: 'sm',
  })

  .addElementStyles('P', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
  })

  .addElementStyles('A', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
  })

  .addElementStyles('SPAN', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
  })

  .addElementStyles('DIV', {
    $fontFamily: 'default',
    $fontWeight: 'normal',
    $fontSize: 'md',
  });
