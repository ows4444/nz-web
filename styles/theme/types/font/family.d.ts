/* eslint-disable no-unused-vars */
export enum FontFamilyEnum {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary'
}
export type FontFamily = keyof typeof FontFamilyEnum;
