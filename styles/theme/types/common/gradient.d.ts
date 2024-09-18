/* eslint-disable no-unused-vars */
export enum GradientEnum {
	default = 'default',
	error = 'error',
	warning = 'warning',
	info = 'info',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success'
}
export type Gradient = keyof typeof GradientEnum;
