'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PreProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const PreStyled = styled.p<Partial<PreProps>>`${({ theme }) => theme&&theme.generateCSS(Components.PRE)};`;

/**
 * DONE
 */
const Pre: FC<PreProps> = ({ content, ...rest }: PreProps) => <PreStyled {...rest}>{content}</PreStyled>;

export default Pre;
