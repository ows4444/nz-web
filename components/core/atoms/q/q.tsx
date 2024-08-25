'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface QProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const QStyled = styled.p<Partial<QProps>>``;

/**
 * DONE
 */
const Q: FC<QProps> = ({ content, ...rest }: QProps) => <QStyled {...rest}>{content}</QStyled>;

export default Q;
