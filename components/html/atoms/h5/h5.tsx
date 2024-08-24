'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface H5Props extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const H5Styled = styled.h5<Partial<H5Props>>``;

/**
 * @name H5
 * @description H5
 * @param {H5Props} props
 * @returns {React.ReactElement}
 * @example <H5 content="Hello, World!" />
 * DONE
 */
const H5: FC<H5Props> = ({ content, ...rest }: H5Props) => <H5Styled {...rest}>{content}</H5Styled>;

export default H5;
