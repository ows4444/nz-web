'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type LiProps = Layout<ComponentProps<'li'>>;

const LiStyled = styled.li<LiProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.LI, props)};
`;

const Li: FC<LiProps> = ({ innerRef, ...props }) => (
	<LiStyled ref={innerRef} {...props}>
		{props.children}
	</LiStyled>
);

export default Li;
