'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H1Props extends ComponentProps<'h1'> {
  content: string;
}

const H1Styled = styled.h1<Omit<H1Props, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.H1)};
`;

/**
 * DONE
 */
const H1: FC<H1Props> = ({ content, ...rest }: H1Props) => <H1Styled {...rest}>{content}</H1Styled>;

export default H1;
