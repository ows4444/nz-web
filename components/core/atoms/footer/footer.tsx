'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type FooterProps = Layout<ComponentProps<'footer'>>;

const FooterStyled = styled.footer<FooterProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.FOOTER, props)};
`;

const Footer: FC<FooterProps> = (props) => <FooterStyled {...props} />;

export default Footer;
