'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type AProps = Layout<ComponentProps<'a'>> & {
	title: string;
};

const AStyled = styled.a<AProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.A, props)}
`;
const A: FC<AProps> = ({ innerRef, ...props }) => (
	<AStyled ref={innerRef} {...props}>
		{props.title}
	</AStyled>
);

export default A;
