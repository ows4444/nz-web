'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface SummaryProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const SummaryStyled = styled.summary<Partial<SummaryProps>>``;

/**
 * DONE
 */
const Summary: FC<SummaryProps> = ({ content, ...rest }: SummaryProps) => <SummaryStyled {...rest}>{content}</SummaryStyled>;

export default Summary;
