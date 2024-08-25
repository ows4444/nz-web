'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface UlProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const UlStyled = styled.ul<UlProps>``;

const Ul: FC<UlProps> = ({ children, ...rest }) => <UlStyled {...rest}>{children}</UlStyled>;

/**
 * DONE
 */
export default Ul;
