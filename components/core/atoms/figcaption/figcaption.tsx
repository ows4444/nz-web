'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface FigcaptionProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const FigcaptionStyled = styled.fieldset<FigcaptionProps>``;

const Figcaption: FC<FigcaptionProps> = ({ children, ...rest }) => <FigcaptionStyled {...rest}>{children}</FigcaptionStyled>;

/**
 * DONE
 */
export default Figcaption;
