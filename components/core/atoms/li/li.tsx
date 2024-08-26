'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LiProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const LiStyled = styled.li<Partial<LiProps>>`${({ theme }) => theme&&theme.generateCSS(Components.LI)};`;

/**
 * DONE
 */
const Li: FC<LiProps> = ({ content, ...rest }: LiProps) => <LiStyled {...rest}>{content}</LiStyled>;

export default Li;
