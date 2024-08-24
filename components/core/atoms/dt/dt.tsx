'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DTProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const DTStyled = styled.col<DTProps>``;

const DT: FC<DTProps> = ({ children, ...rest }) => <DTStyled {...rest}>{children}</DTStyled>;

/**
 * DONE
 */
export default DT;
