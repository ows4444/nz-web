'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ColgroupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const ColgroupStyled = styled.colgroup<ColgroupProps>`${({ theme }) => theme&&theme.generateCSS(Components.COLGROUP)};`;

const Colgroup: FC<ColgroupProps> = ({ children, ...rest }) => <ColgroupStyled {...rest}>{children}</ColgroupStyled>;

/**
 * DONE
 */
export default Colgroup;
