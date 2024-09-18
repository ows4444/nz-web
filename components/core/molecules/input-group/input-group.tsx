'use client';

import React, { ComponentProps, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Div, Input, Label, Small } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type InputGroupProps = Layout<ComponentProps<'div'>> & {
	label: string;
	name: string;
	feedBack?: string;
	autoComplete?: 'on' | 'off' | 'type-of-value';
	type: 'text' | 'email' | 'password' | 'number';
	$value?: string;
};

const InputGroupStyled = styled(Div)<InputGroupProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT_GROUP, props)};
`;

const InputGroup: React.FC<InputGroupProps> = ({ $layout, $value = '', ...props }) => {
	const [valueData, setValue] = useState($value);
	const [feedBackData, setFeedBackValue] = useState(props.feedBack);

	let layoutValue: 'grid-item' | 'flex-item' | undefined;
	if ($layout === 'grid') {
		layoutValue = 'grid-item';
	} else if ($layout === 'flex') {
		layoutValue = 'flex-item';
	} else {
		layoutValue = undefined;
	}

	useEffect(() => {
		setFeedBackValue('This is a feedback message' + valueData);
	}, [valueData, feedBackData]);

	return (
		<InputGroupStyled $layout={$layout} {...props}>
			<Label $layoutItem={layoutValue} htmlFor={props.name} content={props.label} />
			<Input
				$borderRadius={'10px'}
				id={props.name}
				name={props.name}
				type={props.type}
				value={valueData}
				autoComplete={props.autoComplete ?? 'off'}
				onChange={(e) => setValue(e.target.value)}
			/>
			{feedBackData && <Small content={feedBackData} />}
		</InputGroupStyled>
	);
};

export default InputGroup;
