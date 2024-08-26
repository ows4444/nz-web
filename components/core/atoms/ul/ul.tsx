'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface UlProps extends ComponentProps<'ul'> {
  children?: ReactNode;
}

const UlStyled = styled.ul<UlProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.UL)};
`;

const Ul: FC<UlProps> = ({ children, ...rest }) => <UlStyled {...rest}>{children}</UlStyled>;

/**
 * DONE
 */
export default Ul;
