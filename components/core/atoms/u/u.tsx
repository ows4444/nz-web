'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type UProps = Layout<ComponentProps<'u'>> & {
	content: string;
};

const UStyled = styled.u<UProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.U, props)};
`;

const U: FC<UProps> = (props) => <UStyled {...props}>{props.content}</UStyled>;

export default U;
