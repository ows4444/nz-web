'use client';

import { createElement } from 'react';

import { FormComponent, PageComponent } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GenerateForm({
	ID,
	name,
	children,
	props,
	onSubmit
}: Pick<FormComponent, 'name'> & Partial<FormComponent>): any {
	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	const propsData: Record<string, any> = { ...props, onSubmit, key: ID };

	if (children?.length) {
		propsData['children'] = children
			.map((child: PageComponent) => (child.name === 'FORM' ? null : GenerateComponent({ ...child })))
			.filter(Boolean);
	}

	return createElement(Component, propsData);
}
