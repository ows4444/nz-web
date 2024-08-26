'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H3Props extends ComponentProps<'h3'> {
  content: string;
}

const H3Styled = styled.h3<Omit<H3Props, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.H3)};
`;

/**
 * DONE
 */
const H3: FC<H3Props> = ({ content, ...rest }: H3Props) => <H3Styled {...rest}>{content}</H3Styled>;

export default H3;
