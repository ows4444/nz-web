import { Component } from '@styles/theme/components';
import { Props } from '@styles/theme/types';

export type FormComponentData = {
	router: {
		current: string;
		next: string;
	};
	submit: {
		href: string;
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
	};
};

export type PageResponse = {
	name: Component;
	children?: any[];
	action?: (_formData?: FormData) => Promise<void>;
	props?: Props & Record<string, any>;
} & Partial<FormData>;

export type PageComponent = PageResponse & {
	key: any;
};

export type FormComponent = FormComponentData & PageResponse;
