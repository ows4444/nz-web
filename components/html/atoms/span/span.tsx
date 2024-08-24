'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC, ReactNode } from 'react';
import { Theme } from '@styles/theme';

export interface SpanProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const SpanStyled = styled.span<SpanProps>``;

const Span: FC<SpanProps> = ({ content, ...rest }: SpanProps) => <SpanStyled {...rest}>{content}</SpanStyled>;

export default Span;
