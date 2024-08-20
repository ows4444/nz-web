'use client';

import React from 'react';
import styled from 'styled-components';

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  $gridArea?: string;
}

const SpanStyled = styled.span<SpanProps>`
  
`;

const Span: React.FC<SpanProps> = ({ children, ...rest }) => <SpanStyled {...rest}>{children}</SpanStyled>;

export default Span;
