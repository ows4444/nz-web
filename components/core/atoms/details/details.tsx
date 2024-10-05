'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DetailsProps = Layout<ComponentProps<'details'>>;

const DetailsStyled = styled.details<DetailsProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DETAILS, props)};
`;

const DETAILS: FC<DetailsProps> = ({ innerRef, ...props }) => <DetailsStyled ref={innerRef} {...props} />;

export default DETAILS;
