'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface DfnProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const DfnStyled = styled.dfn<DfnProps>``;

const Dfn: FC<DfnProps> = ({ children, ...rest }) => <DfnStyled {...rest}>{children}</DfnStyled>;

/**
 * DONE
 */
export default Dfn;
