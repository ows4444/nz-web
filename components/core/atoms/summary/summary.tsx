'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SummaryProps = Layout<ComponentProps<'summary'>> & {
	content: string;
};

const SummaryStyled = styled.summary<SummaryProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.SUMMARY, props)};
`;

const Summary: FC<SummaryProps> = (props) => <SummaryStyled {...props}>{props.content}</SummaryStyled>;

export default Summary;
