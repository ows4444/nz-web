'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H6Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H6Styled = styled.h6<Partial<H6Props>>``;

 
const H6: FC<H6Props> = ({ content, ...rest }: H6Props) => <H6Styled {...rest}>{content}</H6Styled>;

export default H6;
