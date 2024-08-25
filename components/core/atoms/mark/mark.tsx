'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface MarkProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const MarkStyled = styled.mark<MarkProps>``;

const Mark: FC<MarkProps> = ({ children, ...rest }) => <MarkStyled {...rest}>{children}</MarkStyled>;

/**
 * DONE
 */
export default Mark;
