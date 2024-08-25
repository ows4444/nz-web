'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface LegendProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const LegendStyled = styled.label<Partial<LegendProps>>``;

/**
 * DONE
 */
const Legend: FC<LegendProps> = ({ content, ...rest }: LegendProps) => <LegendStyled {...rest}>{content}</LegendStyled>;

export default Legend;
