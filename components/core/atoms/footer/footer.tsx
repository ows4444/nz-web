'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type FooterProps = Layout<ComponentProps<'footer'>>;

const FooterStyled = styled.footer<FooterProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.FOOTER, props)};
`;

const Footer: FC<FooterProps> = (props) => <FooterStyled {...props} />;

export default Footer;
