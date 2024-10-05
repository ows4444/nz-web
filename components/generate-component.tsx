'use client';

import { useConditionalDragDrop } from 'hooks/react-dnd/dnd-hook';
import React from 'react';

import { PageComponent } from '@app/types';
import { components } from '@components/index';
import { DynamicForm } from '@forms/dynamic-form';

const GenerateComponent = ({ name, children, props }: PageComponent) => {
	const { dragDropRef, ...dragProps } = useConditionalDragDrop(props ?? ({} as any));

	const Component = components[name];
	if (!Component) {
		console.warn(`Component ${name} not found`);
		return null;
	}

	return (
		<Component innerRef={dragDropRef} {...props} {...dragProps}>
			{children?.map(({ key, ...child }) =>
				child.name === 'FORM' ? (
					<DynamicForm key={key ?? child.name} {...child} />
				) : (
					<GenerateComponent key={key ?? child.name} {...child} />
				)
			)}
		</Component>
	);
};

export { GenerateComponent };
