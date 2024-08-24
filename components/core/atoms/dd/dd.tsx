'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DDProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const DDStyled = styled.dd<DDProps>``;

const DD: FC<DDProps> = ({ children, ...rest }) => <DDStyled {...rest}>{children}</DDStyled>;

/**
 * DONE
 */
export default DD;
