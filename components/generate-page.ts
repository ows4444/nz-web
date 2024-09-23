'use client';

import { createElement, useEffect, useState } from 'react';

import { PageComponent, PageResponse } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GeneratePage({ name, children, props }: PageResponse): any {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	const propsData: Record<string, any> = { ...props };

	if (children?.length) {
		propsData['children'] = children.map((child: PageComponent) => GenerateComponent(child));
	}

	return createElement(Component, propsData);
}
