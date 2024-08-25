'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface IProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const IStyled = styled.i<Partial<IProps>>``;

/**
 * DONE
 */
const I: FC<IProps> = ({ content, ...rest }: IProps) => <IStyled {...rest}>{content}</IStyled>;

export default I;
