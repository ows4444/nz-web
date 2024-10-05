'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type QProps = Layout<ComponentProps<'q'>> & {
	content: string;
};

const QStyled = styled.p<QProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.Q, props)};
`;

const Q: FC<QProps> = ({ innerRef, ...props }) => (
	<QStyled ref={innerRef} {...props}>
		{props.content}
	</QStyled>
);

export default Q;
