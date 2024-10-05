'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type UlProps = Layout<ComponentProps<'ul'>>;

const UlStyled = styled.ul<UlProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.UL, props)};
`;

const Ul: FC<UlProps> = ({ innerRef, ...props }) => <UlStyled ref={innerRef} {...props} />;

export default Ul;
