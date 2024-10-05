'use client';

import React from 'react';

import { FormComponent, PageComponent } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GenerateForm({
	childIndex: selfIndex,
	parentKey,
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
			{children?.map((child: PageComponent, idx: number) =>
				child.name === 'FORM'
					? null
					: GenerateComponent({
							...child,
							parentKey: `${parentKey}${String(name).toLowerCase()}[${selfIndex}]`,
							childIndex: `${idx + 1}`
						})
			)}
		</Component>
	);
}
