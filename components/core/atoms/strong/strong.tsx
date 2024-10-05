'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type StrongProps = Layout<ComponentProps<'strong'>> & {
	content: string;
};

const StrongStyled = styled.strong<StrongProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.STRONG, props)};
`;

const Strong: FC<StrongProps> = ({ innerRef, ...props }) => (
	<StrongStyled ref={innerRef} {...props}>
		{props.content}
	</StrongStyled>
);

export default Strong;
