'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface ProgressProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const ProgressStyled = styled.progress<Partial<ProgressProps>>``;

/**
 * DONE
 */
const Progress: FC<ProgressProps> = ({ content, ...rest }: ProgressProps) => <ProgressStyled {...rest}>{content}</ProgressStyled>;

export default Progress;
