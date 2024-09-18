/* eslint-disable no-unused-vars */
export enum borderSizeEnum {
	thin = 'thin',
	extraLight = 'extraLight',
	light = 'light',
	normal = 'normal',
	medium = 'medium',
	semiBold = 'semiBold',
	bold = 'bold',
	extraBold = 'extraBold'
}
export type borderSize = keyof typeof borderSizeEnum;
