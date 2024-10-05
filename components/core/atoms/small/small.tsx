'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SmallProps = Layout<ComponentProps<'small'>> & {
	content: string;
};

const SmallStyled = styled.small<SmallProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.SMALL, props)};
`;

const Small: FC<SmallProps> = ({ innerRef, ...props }) => (
	<SmallStyled ref={innerRef} {...props}>
		{props.content}
	</SmallStyled>
);

export default Small;
