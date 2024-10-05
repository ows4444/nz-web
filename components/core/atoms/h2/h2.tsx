'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type H2Props = Layout<ComponentProps<'h2'>> & {
	content: string;
};

const H2Styled = styled.h2<H2Props & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.H2, props)};
`;

const H2: FC<H2Props> = ({ innerRef, ...props }) => (
	<H2Styled ref={innerRef} {...props}>
		{props.content}
	</H2Styled>
);

export default H2;
