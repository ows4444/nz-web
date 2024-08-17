'use client';

import React from 'react';
import styled from 'styled-components';

export interface FlexBoxProps extends React.HTMLAttributes<HTMLElement> {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  $gridArea?: string;
}

const FlexBoxStyled = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};

  ${({ $gridArea }) => $gridArea && `grid-area: ${$gridArea};`}
`;

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...rest }) => <FlexBoxStyled {...rest}>{children}</FlexBoxStyled>;

export default FlexBox;
