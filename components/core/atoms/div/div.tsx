'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type DivProps = Layout<ComponentProps<'div'>>;

const DivStyled = styled.div<DivProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.DIV, props)};
`;

const Div: FC<DivProps> = ({ innerRef, ...props }) => <DivStyled ref={innerRef} {...props} />;

export default Div;
