/* eslint-disable no-unused-vars */
export enum TypeEnum {
	default = 'default',
	error = 'error',
	warning = 'warning',
	info = 'info',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	black = 'black',
	white = 'white'
}
export type Type = keyof typeof TypeEnum;
