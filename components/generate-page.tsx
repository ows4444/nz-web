'use client';

import { useConditionalDragDrop } from 'hooks/react-dnd/dnd-hook';
import React, { useEffect,  useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { PageResponse } from '@app/types';
import { components } from '@components/index';

export function GeneratePage({ name, children, props }: PageResponse) {
	console.log('GeneratePage', name, children, props);

	const { dragDropRef, ...dragProps } = useConditionalDragDrop(props ?? ({} as any));
	const [childrenState, setChildrenState] = useState(children || []);

	useEffect(() => {
		setChildrenState(children || []);
	}, [children]);

	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	if (props?.$droppable || props?.$draggable) {
		console.log(dragDropRef);

		return (
			<Component ref={dragDropRef} {...props} {...dragProps}>
				OK
			</Component>
		);
	}

	return <Component {...props}>OK</Component>;
}

export default GeneratePage;
