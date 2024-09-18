'use client';

import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { Footer } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type CardFooterProps = Layout<ComponentProps<'footer'>>;

const CardFooterStyled = styled(Footer)<CardFooterProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_FOOTER, props)};
`;

const CardFooter: React.FC<CardFooterProps> = (props) => <CardFooterStyled {...props} />;

export default CardFooter;
