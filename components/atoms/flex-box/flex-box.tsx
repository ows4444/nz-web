'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';

export type FlexBox = {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export interface FlexBoxProps extends FlexBox, ComponentProps<'div'> {}

export const FlexBoxStyled = styled.div<FlexBoxProps & { theme: Theme }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
`;

const FlexBox: FC<FlexBoxProps> = (props) => <FlexBoxStyled {...props} />;

/**
 * DONE
 */

export default FlexBox;
