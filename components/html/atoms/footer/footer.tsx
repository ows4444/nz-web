'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const FooterStyled = styled.footer<FooterProps>``;

const Footer: FC<FooterProps> = ({ children, ...rest }) => <FooterStyled {...rest}>{children}</FooterStyled>;

/**
 * @name Footer
 * @description Footer
 * @param {FooterProps} props
 * @returns {React.ReactElement}
 * @example <Footer> </Footer>
 * DONE
 */
export default Footer;
