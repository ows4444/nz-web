'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}
const BlockquoteStyled = styled.blockquote<BlockquoteProps>``;
const Blockquote: FC<BlockquoteProps> = ({ children, ...rest }) => <BlockquoteStyled {...rest}>{children}</BlockquoteStyled>;

/**
 * DONE 
 */
export default Blockquote;
