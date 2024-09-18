/* eslint-disable no-unused-vars */
export enum FontSizeEnum {
	xxs = 'xxs',
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
	xxxl = 'xxxl'
}
export type FontSize = keyof typeof FontSizeEnum;
