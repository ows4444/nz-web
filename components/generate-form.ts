'use client';

import { createElement } from 'react';

import { FormComponent, PageComponent } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GenerateForm({ name, children, props, action }: FormComponent): any {
	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	const propsData: Record<string, any> = { ...props, action };

	if (children?.length) {
		propsData['children'] = children
			.map((child: PageComponent) => {
				return child.name === 'FORM' ? null : GenerateComponent(child);
			})
			.filter(Boolean);
	}

	return createElement(Component, propsData);
}
