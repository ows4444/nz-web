'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type H2Props = Layout<ComponentProps<'h2'>> & {
  content: string;
};

const H2Styled = styled.h2<H2Props & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.H2, props)};
`;

const H2: FC<H2Props> = (props) => <H2Styled {...props}>{props.content}</H2Styled>;

export default H2;
