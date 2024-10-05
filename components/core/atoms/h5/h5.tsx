'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type H5Props = Layout<ComponentProps<'h5'>> & {
	content: string;
};

const H5Styled = styled.h5<H5Props & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.H5, props)};
`;

const H5: FC<H5Props> = ({ innerRef, ...props }) => (
	<H5Styled ref={innerRef} {...props}>
		{props.content}
	</H5Styled>
);

export default H5;
