'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H2Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H2Styled = styled.h2<Partial<H2Props>>`${({ theme }) => theme&&theme.generateCSS(Components.H2)};`;

/**
 * DONE
 */
const H2: FC<H2Props> = ({ content, ...rest }: H2Props) => <H2Styled {...rest}>{content}</H2Styled>;

export default H2;
