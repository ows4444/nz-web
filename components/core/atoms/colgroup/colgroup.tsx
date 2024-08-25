'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface ColgroupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const ColgroupStyled = styled.colgroup<ColgroupProps>``;

const Colgroup: FC<ColgroupProps> = ({ children, ...rest }) => <ColgroupStyled {...rest}>{children}</ColgroupStyled>;

/**
 * DONE
 */
export default Colgroup;
