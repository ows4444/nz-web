'use client';

import { createElement } from 'react';

import { FormComponent, PageResponse } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GeneratePage({ name, children, props }: PageResponse) {
	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}
	const propsData: Record<string, any> = { ...props };

	if (children?.length) {
		propsData['children'] = children.map((child: FormComponent) => GenerateComponent({ ...child }));
	}

	return createElement(Component, propsData);
}
