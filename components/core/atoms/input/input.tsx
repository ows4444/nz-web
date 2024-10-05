'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type InputProps = Layout<ComponentProps<'input'>> & {
	validation?: Record<string, unknown>;
	name: string;
};

const InputStyled = styled.input<InputProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT, props)}}
`;

const Input: FC<InputProps> = ({ innerRef, validation, ...props }) => {
	const methods = useFormContext();
	if (methods) {
		const { register, watch } = methods;
		watch(props.name);
		return <InputStyled {...props} {...register(props.name, validation)} />;
	}
	return <InputStyled ref={innerRef} {...props} />;
};

export default Input;
