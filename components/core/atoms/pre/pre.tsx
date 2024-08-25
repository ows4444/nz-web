'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface PreProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const PreStyled = styled.p<Partial<PreProps>>``;

/**
 * DONE
 */
const Pre: FC<PreProps> = ({ content, ...rest }: PreProps) => <PreStyled {...rest}>{content}</PreStyled>;

export default Pre;
