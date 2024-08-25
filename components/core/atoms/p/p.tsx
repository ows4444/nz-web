'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface PProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const PStyled = styled.p<Partial<PProps>>``;

/**
 * DONE
 */
const P: FC<PProps> = ({ content, ...rest }: PProps) => <PStyled {...rest}>{content}</PStyled>;

export default P;
