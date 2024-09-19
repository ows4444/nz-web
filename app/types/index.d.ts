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
	action?: (_formData?: FormData) => Promise<void>;
	props?: Props & Record<string, any>;
};

export type ComponentFormResponse = {
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

export type ComponentResponse = component;
