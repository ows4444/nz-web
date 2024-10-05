'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ButtonProps = Layout<ComponentProps<'button'>> & {
	title: string;
};

const ButtonStyled = styled.button<ButtonProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.BUTTON, props)}
`;
const Button: FC<ButtonProps> = ({ innerRef, ...props }) => {
	const methods = useFormContext();
	if (methods) {
		const { formState } = methods;

		const isValid = formState.isValid;

		return (
			<ButtonStyled ref={innerRef} {...props} disabled={!isValid}>
				{props.title}
			</ButtonStyled>
		);
	}

	return (
		<ButtonStyled ref={innerRef} {...props}>
			{props.title}
		</ButtonStyled>
	);
};

export default Button;
