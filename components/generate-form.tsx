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

	const propsData: Record<string, any> = {
		...props,
		onSubmit,
		key: `${parentKey}${String(name).toLowerCase()}[${selfIndex}]`
	};

	if (children?.length) {
		propsData['children'] = children
			.map((child: PageComponent, idx: number) =>
				child.name === 'FORM'
					? null
					: GenerateComponent({
							...child,
							parentKey: `${parentKey}${String(name).toLowerCase()}[${selfIndex}]`,
							childIndex: `${idx + 1}`
						})
			)
			.filter(Boolean);
	}

	return <Component {...propsData} />;
}
