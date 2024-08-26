'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SpanProps extends ComponentProps<'span'> {
  children?: ReactNode;
}

const SpanStyled = styled.span<SpanProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SPAN)};
`;

const Span: FC<SpanProps> = (props) => <SpanStyled {...props}/>;{children}</SpanStyled>;

/**
 * DONE
 */
export default Span;
