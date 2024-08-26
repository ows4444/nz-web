'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface QProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const QStyled = styled.p<Partial<QProps>>`${({ theme }) => theme&&theme.generateCSS(Components.Q)};`;

/**
 * DONE
 */
const Q: FC<QProps> = ({ content, ...rest }: QProps) => <QStyled {...rest}>{content}</QStyled>;

export default Q;
