'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface IProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const IStyled = styled.i<Partial<IProps>>`${({ theme }) => theme&&theme.generateCSS(Components.I)};`;

/**
 * DONE
 */
const I: FC<IProps> = ({ content, ...rest }: IProps) => <IStyled {...rest}>{content}</IStyled>;

export default I;
