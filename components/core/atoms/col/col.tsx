'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type ColProps = Layout<ComponentProps<'col'>>;

const ColStyled = styled.col<ColProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.COL, props)};
`;

const Col: FC<ColProps> = ({ innerRef, ...props }) => <ColStyled ref={innerRef} {...props} />;

export default Col;
