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
  ${({ theme }) => theme && theme.generateCSS(Components.DIV)};
`;

const Div: FC<DivProps> = (props) => <DivStyled {...props}/>;{children}</DivStyled>;

/**
 * DONE
 */
export default Div;
