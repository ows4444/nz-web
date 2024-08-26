'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const PStyled = styled.p<Partial<PProps>>`${({ theme }) => theme&&theme.generateCSS(Components.P)};`;

/**
 * DONE
 */
const P: FC<PProps> = ({ content, ...rest }: PProps) => <PStyled {...rest}>{content}</PStyled>;

export default P;
