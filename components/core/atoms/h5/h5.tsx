'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H5Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H5Styled = styled.h5<Partial<H5Props>>`${({ theme }) => theme&&theme.generateCSS(Components.H5)};`;

/**
 * DONE
 */
const H5: FC<H5Props> = ({ content, ...rest }: H5Props) => <H5Styled {...rest}>{content}</H5Styled>;

export default H5;
