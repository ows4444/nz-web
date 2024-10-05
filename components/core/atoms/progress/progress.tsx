'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ProgressProps = Layout<ComponentProps<'progress'>> & {
	content: string;
};

const ProgressStyled = styled.progress<ProgressProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.PROGRESS, props)};
`;

const Progress: FC<ProgressProps> = ({ innerRef, ...props }) => (
	<ProgressStyled ref={innerRef} {...props}>
		{props.content}
	</ProgressStyled>
);

export default Progress;
