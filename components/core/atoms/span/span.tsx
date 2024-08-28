'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type SpanProps = Layout<ComponentProps<'span'>>;

const SpanStyled = styled.span<SpanProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SPAN, props)};
`;

const Span: FC<SpanProps> = (props) => <SpanStyled {...props} />;

export default Span;
