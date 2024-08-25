'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface THProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const THStyled = styled.th<Partial<THProps>>``;

/**
 * DONE
 */
const TH: FC<THProps> = ({ content, ...rest }: THProps) => <THStyled {...rest}>{content}</THStyled>;

export default TH;
