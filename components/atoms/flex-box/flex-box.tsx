'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';

export interface FlexBoxProps extends ComponentProps<'div'> {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  $gap?: string;
  children?: ReactNode;
}

export const FlexBoxStyled = styled.div<FlexBoxProps & { theme: Theme }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  gap: ${({ $gap }) => $gap || '0'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`;

const FlexBox: FC<FlexBoxProps> = (props) => <FlexBoxStyled {...props} />;

/**
 * DONE
 */

export default FlexBox;
