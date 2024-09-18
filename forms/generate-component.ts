'use client';

import { createElement, useEffect, useState } from 'react';

import { ChildComponent, component } from '@app/types';
import { components } from '@components/index';

export function GenerateComponents({ name, children, props, action }: component): any {
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

	const propsData: Record<string, any> = { ...props, action };

	if (children?.length) {
		propsData['children'] = children.map((child) => GenerateComponent(child));
	}

	return createElement(Component, propsData);
}

function GenerateComponent({ key, name, children, props }: ChildComponent): any {
	const Component = components[name];
	if (!Component) {
		return null;
	}

	const propsData: { [key: string]: any } = { ...props, key };

	if (children?.length) {
		propsData.children = children?.map((child) => GenerateComponent(child));
	}
	return createElement(Component, propsData);
}
