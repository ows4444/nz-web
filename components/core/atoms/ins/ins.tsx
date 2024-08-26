'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface InsProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const InsStyled = styled.ins<Partial<InsProps>>`${({ theme }) => theme&&theme.generateCSS(Components.INS)};`;

/**
 * DONE
 */
const Ins: FC<InsProps> = ({ content, ...rest }: InsProps) => <InsStyled {...rest}>{content}</InsStyled>;

export default Ins;
