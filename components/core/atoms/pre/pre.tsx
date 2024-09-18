'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type PreProps = Layout<ComponentProps<'pre'>> & {
	content: string;
};

const PreStyled = styled.pre<PreProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.PRE, props)};
`;

const Pre: FC<PreProps> = (props) => <PreStyled {...props}>{props.content}</PreStyled>;

export default Pre;
