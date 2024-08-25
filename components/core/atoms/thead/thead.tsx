'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface THeadProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const THeadStyled = styled.thead<THeadProps>``;

const THead: FC<THeadProps> = ({ children, ...rest }) => <THeadStyled {...rest}>{children}</THeadStyled>;

/**
 * DONE
 */
export default THead;
