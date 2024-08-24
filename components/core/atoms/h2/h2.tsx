'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H2Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H2Styled = styled.h2<Partial<H2Props>>``;

/**
 * @name H2
 * @description H2
 * @param {H2Props} props
 * @returns {React.ReactElement}
 * @example <H2 content="Hello, World!" />
 * DONE
 */
const H2: FC<H2Props> = ({ content, ...rest }: H2Props) => <H2Styled {...rest}>{content}</H2Styled>;

export default H2;
