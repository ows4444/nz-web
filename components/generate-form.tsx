'use client';

import React from 'react';

import { FormComponent, PageComponent } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GenerateForm({
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

	return (
		<Component onSubmit={onSubmit} {...props}>
			{children?.map(({ key, ...child }: PageComponent) =>
				child.name === 'FORM' ? null : <GenerateComponent key={key ?? child.name} {...child} />
			)}
		</Component>
	);
}
