'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface LiProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const LiStyled = styled.li<Partial<LiProps>>``;

/**
 * DONE
 */
const Li: FC<LiProps> = ({ content, ...rest }: LiProps) => <LiStyled {...rest}>{content}</LiStyled>;

export default Li;
