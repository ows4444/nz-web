'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface UProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const UStyled = styled.u<Partial<UProps>>`${({ theme }) => theme&&theme.generateCSS(Components.U)};`;

/**
 * DONE
 */
const U: FC<UProps> = ({ content, ...rest }: UProps) => <UStyled {...rest}>{content}</UStyled>;

export default U;
