'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface EmbedProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const EmbedStyled = styled.embed<EmbedProps>`${({ theme }) => theme&&theme.generateCSS(Components.EMBED)};`;

const Embed: FC<EmbedProps> = ({ children, ...rest }) => <EmbedStyled {...rest}>{children}</EmbedStyled>;

/**
 * DONE
 */
export default Embed;
