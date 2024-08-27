'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FooterProps extends ComponentProps<'footer'> {
  children?: ReactNode;
}

const FooterStyled = styled.footer<FooterProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.FOOTER, props)};
`;

const Footer: FC<FooterProps> = (props) => <FooterStyled {...props} />;

/**
 * DONE
 */
export default Footer;
