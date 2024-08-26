'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ProgressProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const ProgressStyled = styled.progress<Partial<ProgressProps>>`${({ theme }) => theme&&theme.generateCSS(Components.PROGRESS)};`;

/**
 * DONE
 */
const Progress: FC<ProgressProps> = ({ content, ...rest }: ProgressProps) => <ProgressStyled {...rest}>{content}</ProgressStyled>;

export default Progress;
