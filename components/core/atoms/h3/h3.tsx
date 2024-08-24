'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H3Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H3Styled = styled.h3<Partial<H3Props>>``;

/**
 * @name H3
 * @description H3
 * @param {H3Props} props
 * @returns {React.ReactElement}
 * @example <H3 content="Hello, World!" />
 * DONE
 */
const H3: FC<H3Props> = ({ content, ...rest }: H3Props) => <H3Styled {...rest}>{content}</H3Styled>;

export default H3;
