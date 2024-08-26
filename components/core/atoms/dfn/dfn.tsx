'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DfnProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DfnStyled = styled.dfn<DfnProps>`${({ theme }) => theme&&theme.generateCSS(Components.DFN)};`;

const Dfn: FC<DfnProps> = ({ children, ...rest }) => <DfnStyled {...rest}>{children}</DfnStyled>;

/**
 * DONE
 */
export default Dfn;
