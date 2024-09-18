/* eslint-disable no-unused-vars */
export enum colorEnum {
	// Primary & Secondary Colors
	primary = 'primary',
	secondary = 'secondary',

	// Neutral Colors
	black = 'black',
	white = 'white',

	// Text Colors
	textPrimary = 'textPrimary',
	textSecondary = 'textSecondary',
	textTertiary = 'textTertiary',

	// Background Colors
	background = 'background',
	backgroundLight = 'backgroundLight',
	backgroundDark = 'backgroundDark',

	// Border Colors
	border = 'border',
	borderLight = 'borderLight',
	borderDark = 'borderDark',

	// Grey Scale
	grey = 'grey',
	lightGrey = 'lightGrey',
	darkGrey = 'darkGrey',
	grey100 = 'grey100',
	grey200 = 'grey200',
	grey300 = 'grey300',
	grey400 = 'grey400',
	grey500 = 'grey500',
	grey600 = 'grey600',
	grey700 = 'grey700',
	grey800 = 'grey800',
	grey900 = 'grey900',

	// Status Colors
	error = 'error',
	warning = 'warning',
	info = 'info',
	success = 'success',

	// Custom Shades (can be modified based on your theme)
	customPrimaryLight = 'customPrimaryLight',
	customPrimaryDark = 'customPrimaryDark',
	customSecondaryLight = 'customSecondaryLight',
	customSecondaryDark = 'customSecondaryDark',
	customAccent = 'customAccent',

	// Other Colors
	highlight = 'highlight',
	shadow = 'shadow',

	// Additional Palette
	blue = 'blue',
	lightBlue = 'lightBlue',
	darkBlue = 'darkBlue',
	red = 'red',
	lightRed = 'lightRed',
	darkRed = 'darkRed',
	green = 'green',
	lightGreen = 'lightGreen',
	darkGreen = 'darkGreen',
	yellow = 'yellow',
	lightYellow = 'lightYellow',
	darkYellow = 'darkYellow'
}

export type Color = keyof typeof colorEnum;
