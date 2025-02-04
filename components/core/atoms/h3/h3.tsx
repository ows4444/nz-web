'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type H3Props = Layout<ComponentProps<'h3'>> & {
	content: string;
};

const H3Styled = styled.h3<H3Props & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.H3, props)};
`;

const H3: FC<H3Props> = ({ innerRef, ...props }) => (
	<H3Styled ref={innerRef} {...props}>
		{props.content}
	</H3Styled>
);

export default H3;
