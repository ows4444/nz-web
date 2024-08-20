'use client';

import React from 'react';
import styled from 'styled-components';

export interface FlexBoxProps extends React.HTMLAttributes<HTMLElement> {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  $gap?: string;
  $gridArea?: string;
}

export const FlexBoxStyled = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  gap: ${({ $gap }) => $gap || '0'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`;

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...rest }) => <FlexBoxStyled {...rest}>{children}</FlexBoxStyled>;

export default FlexBox;
