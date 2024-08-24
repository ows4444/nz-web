'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H4Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H4Styled = styled.h4<Partial<H4Props>>``;

/**
 * DONE
 */
const H4: FC<H4Props> = ({ content, ...rest }: H4Props) => <H4Styled {...rest}>{content}</H4Styled>;

export default H4;
