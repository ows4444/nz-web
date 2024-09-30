'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type H6Props = Layout<ComponentProps<'h6'>> & {
	content: string;
};

const H6Styled = styled.h6<H6Props & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.H6, props)};
`;

const H6: FC<H6Props> = (props) => <H6Styled {...props}>{props.content}</H6Styled>;

export default H6;
