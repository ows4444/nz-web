'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type HGroupProps = Layout<ComponentProps<'hgroup'>>;

const HGroupStyled = styled.hgroup<HGroupProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.HGROUP, props)};
`;

const HGroup: FC<HGroupProps> = ({ innerRef, ...props }) => <HGroupStyled ref={innerRef} {...props} />;

export default HGroup;
