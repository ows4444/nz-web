'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DivProps extends ComponentProps<'div'> {
  theme?: Theme;
  children?: ReactNode;
}

const DivStyled = styled.div<DivProps>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DIV, props)};
`;

const Div: FC<DivProps> = (props) => <DivStyled {...props} />;

/**
 * DONE
 */
export default Div;
