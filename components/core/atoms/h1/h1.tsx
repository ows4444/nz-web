'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type H1Props = Layout<ComponentProps<'h1'>> & {
  content: string;
};

const H1Styled = styled.h1<H1Props & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.H1, props)};
`;

const H1: FC<H1Props> = (props: H1Props) => <H1Styled {...props}>{props.content}</H1Styled>;

export default H1;
