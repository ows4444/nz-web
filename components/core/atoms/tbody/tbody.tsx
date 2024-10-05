'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type TBodyProps = Layout<ComponentProps<'tbody'>>;

const TBodyStyled = styled.tbody<TBodyProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.TBODY, props)};
`;

const TBody: FC<TBodyProps> = ({ innerRef, ...props }) => <TBodyStyled ref={innerRef} {...props} />;

export default TBody;
