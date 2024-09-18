/* eslint-disable no-unused-vars */
export enum FontWeightEnum {
	thin = 'thin',
	extraLight = 'extraLight',
	light = 'light',
	normal = 'normal',
	medium = 'medium',
	semiBold = 'semiBold',
	bold = 'bold',
	extraBold = 'extraBold',
	black = 'black'
}
export type FontWeight = keyof typeof FontWeightEnum;
