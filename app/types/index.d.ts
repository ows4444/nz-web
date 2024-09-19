import { Component } from '@styles/theme/components';
import { Props } from '@styles/theme/types';

export type ChildComponent = {
	key: any;
	name: Component;
	children?: ChildComponent[];
	props?: Props & Record<string, any>;
};
export type component = {
	name: Component;
	children?: ChildComponent[];
	action?: any;
	props?: Props & Record<string, any>;
};

export type ComponentResponse = {
	component: component;
	router: {
		current: string;
		next: string;
	};
	submit: {
		href: string;
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
	};
};
