'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type PProps = Layout<ComponentProps<'p'>> & {
	content: string;
};

const PStyled = styled.p<PProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.P, props)};
`;

const P: FC<PProps> = (props) => <PStyled {...props}>{props.content}</PStyled>;

export default P;
