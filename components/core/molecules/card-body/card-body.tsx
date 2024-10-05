'use client';

import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { Section } from '@components/core/atoms';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type CardBodyProps = Layout<ComponentProps<'section'>>;

const CardBodyStyled = styled(Section)<CardBodyProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.CARD_BODY, props)};
`;

const CardBody: React.FC<CardBodyProps> = ({ innerRef, ...props }) => <CardBodyStyled innerRef={innerRef} {...props} />;

export default CardBody;
