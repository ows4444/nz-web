'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DLProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DLStyled = styled.dl<DLProps>``;

const DL: FC<DLProps> = ({ children, ...rest }) => <DLStyled {...rest}>{children}</DLStyled>;

/**
 * DONE
 */
export default DL;
