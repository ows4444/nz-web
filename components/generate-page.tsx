'use client';

import { useConditionalDragDrop } from 'hooks/react-dnd/dnd-hook';
import React, { useEffect, useState } from 'react';

import { PageResponse } from '@app/types';
import { components } from '@components/index';

import { GenerateComponent } from './generate-component';

export function GeneratePage({ name, children, props }: PageResponse) {
	const [childrenState, setChildrenState] = useState(children || []);
	const { dragDropRef, ...dragProps } = useConditionalDragDrop(props ?? ({} as any));
	useEffect(() => {
		setChildrenState(children || []);
	}, [children]);

	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	const renderChildren = () =>
		childrenState.map(function ComponentGenerator(child) {
			return <GenerateComponent ref={dragDropRef} {...child} {...dragProps} key={child.key} />;
		});

	return (
		<Component ref={dragDropRef} {...props}>
			{renderChildren()}
		</Component>
	);
}

export default GeneratePage;
