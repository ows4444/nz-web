'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SpanProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const SpanStyled = styled.span<SpanProps>`${({ theme }) => theme&&theme.generateCSS(Components.SPAN)};`;

const Span: FC<SpanProps> = ({ children, ...rest }) => <SpanStyled {...rest}>{children}</SpanStyled>;

/**
 * DONE
 */
export default Span;
