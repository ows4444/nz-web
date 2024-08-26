'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface StrongProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const StrongStyled = styled.strong<Partial<StrongProps>>`${({ theme }) => theme&&theme.generateCSS(Components.STRONG)};`;

/**
 * DONE
 */
const Strong: FC<StrongProps> = ({ content, ...rest }: StrongProps) => <StrongStyled {...rest}>{content}</StrongStyled>;

export default Strong;
