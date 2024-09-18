/* eslint-disable no-unused-vars */
export enum MediaSizeEnum {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
	xxxl = 'xxxl'
}
export type MediaSize = keyof typeof MediaSizeEnum;
