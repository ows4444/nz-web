'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface LabelProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  content: string;
}

const LabelStyled = styled.label<Partial<LabelProps>>``;

/**
 * DONE
 */
const Label: FC<LabelProps> = ({ content, ...rest }: LabelProps) => <LabelStyled {...rest}>{content}</LabelStyled>;

export default Label;
