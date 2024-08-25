'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface EmbedProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const EmbedStyled = styled.embed<EmbedProps>``;

const Embed: FC<EmbedProps> = ({ children, ...rest }) => <EmbedStyled {...rest}>{children}</EmbedStyled>;

/**
 * DONE
 */
export default Embed;
