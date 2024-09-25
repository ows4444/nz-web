'use client';

import { createElement } from 'react';

import { PageComponent } from '@app/types';
import { components } from '@components/index';
import { DynamicForm } from '@forms/dynamic-form';

export function GenerateComponent({ key, name, register, watch, children, props }: PageComponent): any {
	const Component = components[name];
	if (!Component) {
		return null;
	}

	const propsData: { [key: string]: any } = { ...props, key };

	if (children?.length) {
		propsData.children = children?.map((child) => {
			return child.name === 'FORM' ? DynamicForm({ ...child }) : GenerateComponent({ ...child, register, watch });
		});
	}

	if (name === 'INPUT' && register && props && props['name']) {
		Object.assign(propsData, { register, watch });
	}

	return createElement(Component, propsData);
}
