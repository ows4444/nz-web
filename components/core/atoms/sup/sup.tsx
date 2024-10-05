'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SupProps = Layout<ComponentProps<'sup'>> & {
	content: string;
};

const SupStyled = styled.sup<SupProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.SUP, props)}
`;

const Sup: FC<SupProps> = ({ innerRef, ...props }) => (
	<SupStyled ref={innerRef} {...props}>
		{props.content}
	</SupStyled>
);

export default Sup;
