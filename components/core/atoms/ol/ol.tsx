'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface OlProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const OlStyled = styled.ol<OlProps>``;

const Ol: FC<OlProps> = ({ children, ...rest }) => <OlStyled {...rest}>{children}</OlStyled>;

/**
 * DONE
 */
export default Ol;
