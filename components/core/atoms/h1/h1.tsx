'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H1Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H1Styled = styled.h1<Partial<H1Props>>``;

/**
 * DONE
 */
const H1: FC<H1Props> = ({ content, ...rest }: H1Props) => <H1Styled {...rest}>{content}</H1Styled>;

export default H1;
