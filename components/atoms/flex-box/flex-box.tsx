'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';

export interface FlexBoxProps extends HTMLAttributes<HTMLElement> {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  $gap?: string;
  children?: ReactNode;
}

export const FlexBoxStyled = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  gap: ${({ $gap }) => $gap || '0'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`;

const FlexBox: FC<FlexBoxProps> = ({ children, ...rest }) => <FlexBoxStyled {...rest}>{children}</FlexBoxStyled>;

/**
 * DONE
 */

export default FlexBox;
