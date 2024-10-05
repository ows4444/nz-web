'use client';

import { useConditionalDragDrop } from 'hooks/react-dnd/dnd-hook';
import React from 'react';

import { PageComponent } from '@app/types';
import { components } from '@components/index';

const GenerateComponent = ({ name, children, props }: PageComponent) => {
	const { dragDropRef, ...dragProps } = useConditionalDragDrop(props ?? ({} as any));

	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	return (
		<Component innerRef={dragDropRef} {...props} {...dragProps}>
			{children?.map(({ key, ...child }) => <GenerateComponent key={key ?? child.name} {...child} />)}
		</Component>
	);
};

export { GenerateComponent };
