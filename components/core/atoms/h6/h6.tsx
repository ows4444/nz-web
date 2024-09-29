'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { DragEvents, Layout } from '@styles/theme/types';

type H6Props = Layout<ComponentProps<'h6'>> & {
	content: string;
};

const H6Styled = styled.h6<H6Props & DragEvents, { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.H6, props)};
`;

const H6: FC<H6Props> = (props) => {
	const { $draggable, $droppable, $dragType, $acceptsDropTypes } = props;

	// Setting up useDrop hook
	const [{ isOver, canDrop }, dropRef] = useDrop(
		() => ({
			accept: $acceptsDropTypes || [],
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop()
			})
		}),
		[$acceptsDropTypes]
	);

	// Setting up useDrag hook
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: $dragType as string,
			item: { id: props.key as string, $draggable, $droppable, $dragType, $acceptsDropTypes, ...props },
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging()
			})
		}),
		[$dragType]
	);

	// Combine both drop and drag refs using a merge function
	const dragDropRef = (el: any) => {
		if ($droppable && dropRef) dropRef(el);
		if ($draggable && dragRef) dragRef(el);
	};

	return (
		<H6Styled ref={dragDropRef} {...props} $canDrop={canDrop} $isOver={isOver} $isDragging={isDragging}>
			{props.content}
		</H6Styled>
	);
};

export default H6;
