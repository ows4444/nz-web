/* eslint-disable no-unused-vars */

export enum SelectorEnum {
	hover = 'hover',
	focus = 'focus',
	active = 'active',
	visited = 'visited',
	disabled = 'disabled',
	checked = 'checked'
}
export type State = keyof typeof SelectorEnum;
