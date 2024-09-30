'use client';

import React, { forwardRef, useEffect, useState } from 'react';

import { PageComponent } from '@app/types';
import { components } from '@components/index';
import { DynamicForm } from '@forms/dynamic-form';

const GenerateComponent = forwardRef(function GenerateComponent(
	{ childIndex: selfIndex, name, children, props, parentKey }: PageComponent,
	ref
) {
	const [childrenState, setChildrenState] = useState(children || []);

	useEffect(() => {
		setChildrenState(children || []);
	}, [children]);

	const Component = components[name];
	if (!Component) {
		return null;
	}

	console.log(name, ref);

	return <Component ref={ref} {...props}> OK </Component>;
	// const renderChildren = () => {
	// 	return childrenState.map(({ key: _key, ...child }, idx) => {
	// 		return child.name === 'FORM' ? (
	// 			<DynamicForm
	// 				key={`${parentKey}${String(name).toLowerCase()}[${idx}]`}
	// 				{...child}
	// 				parentKey={`${parentKey}${String(name).toLowerCase()}[${selfIndex}]`}
	// 				childIndex={`${idx + 1}`}
	// 			/>
	// 		) : (
	// 			<GenerateComponent
	// 				ref={ref}
	// 				key={`${parentKey}${String(name).toLowerCase()}[${idx}]`}
	// 				{...child}
	// 				parentKey={`${parentKey}${String(name).toLowerCase()}[${selfIndex}]`}
	// 				childIndex={`${idx + 1}`}
	// 			/>
	// 		);
	// 	});
	// };

	// return (
	// 	<Component ref={ref} {...props} key={`${parentKey}${String(name).toLowerCase()}[${selfIndex}]`}>
	// 		 OK
	// 	</Component>
	// );
});

export { GenerateComponent };
