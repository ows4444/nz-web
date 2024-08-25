'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface SubProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const SubStyled = styled.sub<Partial<SubProps>>``;

/**
 * DONE
 */
const Sub: FC<SubProps> = ({ content, ...rest }: SubProps) => <SubStyled {...rest}>{content}</SubStyled>;

export default Sub;
