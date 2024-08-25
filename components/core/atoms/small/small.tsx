'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface SmallProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const SmallStyled = styled.p<Partial<SmallProps>>``;

/**
 * DONE
 */
const Small: FC<SmallProps> = ({ content, ...rest }: SmallProps) => <SmallStyled {...rest}>{content}</SmallStyled>;

export default Small;
