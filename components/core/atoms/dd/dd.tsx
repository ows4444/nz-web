'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DDProps = Layout<ComponentProps<'dd'>>;

const DDStyled = styled.dd<DDProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DD, props)};
`;

const DD: FC<DDProps> = ({ innerRef, ...props }) => <DDStyled ref={innerRef} {...props} />;

export default DD;
