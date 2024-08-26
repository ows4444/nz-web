'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DelProps extends ComponentProps<'del'> {
  children?: ReactNode;
}

const DelStyled = styled.del<DelProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.DEL)};
`;

const DEL: FC<DelProps> = ({ children, ...rest }) => <DelStyled {...rest}>{children}</DelStyled>;

/**
 * DONE
 */
export default DEL;
