import { ComponentProps } from 'react';

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

	key?: string;
	[key: string]: any;
};

export type PageResponse = {
	name: Component;
	children?: FormComponent[];
	errorData?: any;
	action?: (_?: any) => Promise<void>;
	props?: Props & Record<string, any>;
} & Partial<FormData>;

export type PageComponent = PageResponse & {
	key: string;
	parentKey: string;
	[key: string]: any;
};

export type FormComponent = FormComponentData &
	PageComponent & {
		defaultValue?: any;
	} & ComponentProps<'form'>;
