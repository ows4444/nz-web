'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type H4Props = BasicLayout<ComponentProps<'h4'>> & {
  content: string;
};

const H4Styled = styled.h4<H4Props & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.H4, props)};
`;

const H4: FC<H4Props> = (props) => <H4Styled {...props}>{props.content}</H4Styled>;

export default H4;
