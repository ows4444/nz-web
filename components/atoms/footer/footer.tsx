'use client';

import { Theme } from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const FooterStyled = styled.footer<FooterProps>``;

const Footer: React.FC<Omit<FooterProps, '$theme'>> = ({ children, ...rest }) => (
  <FooterStyled {...rest}>{children}</FooterStyled>
);

export default Footer;
