'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const FooterStyled = styled.footer<FooterProps>`${({ theme }) => theme&&theme.generateCSS(Components.FOOTER)};`;

const Footer: FC<FooterProps> = ({ children, ...rest }) => <FooterStyled {...rest}>{children}</FooterStyled>;

/**
 * DONE
 */
export default Footer;
