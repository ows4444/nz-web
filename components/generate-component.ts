'use client';

import { createElement } from 'react';

import { PageComponent } from '@app/types';
import { components } from '@components/index';
import { DynamicForm } from '@forms/dynamic-form';

export function GenerateComponent({ key, name, children, props }: PageComponent): any {
	const Component = components[name];
	if (!Component) {
		return null;
	}

	const propsData: { [key: string]: any } = { ...props, key };

	if (children?.length) {
		propsData.children = children?.map((child) => {
			return child.name === 'FORM' ? DynamicForm({ ...child }) : GenerateComponent({ ...child });
		});
	}

	return createElement(Component, propsData);
}
