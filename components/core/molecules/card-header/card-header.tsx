'use client';

import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Header } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type CardHeaderProps = Layout<ComponentProps<'header'>>;

const CardHeaderStyled = styled(Header)<CardHeaderProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_HEADER, props)};
`;

const CardHeader: FC<CardHeaderProps> = ({ innerRef, ...props }) => <CardHeaderStyled ref={innerRef} {...props} />;

export default CardHeader;
