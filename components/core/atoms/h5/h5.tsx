'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type H5Props = BasicLayout<ComponentProps<'h5'>> & {
  content: string;
};

const H5Styled = styled.h5<H5Props & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.H5, props)};
`;

const H5: FC<H5Props> = (props) => <H5Styled {...props}>{props.content}</H5Styled>;

export default H5;
