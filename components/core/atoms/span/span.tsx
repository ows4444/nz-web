'use client';

import React from 'react';
import type { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type SpanProps = Layout<ComponentProps<'span'>>;

const SpanStyled = styled.span<SpanProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.SPAN, props)};
`;

const Span: FC<SpanProps> = ({ innerRef, ...props }) => <SpanStyled ref={innerRef} {...props} />;

export default Span;
