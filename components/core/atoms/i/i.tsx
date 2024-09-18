'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type IProps = Layout<ComponentProps<'i'>> & {
	content: string;
};

const IStyled = styled.i<IProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.I, props)};
`;

const I: FC<IProps> = (props) => <IStyled {...props}>{props.content}</IStyled>;

export default I;
