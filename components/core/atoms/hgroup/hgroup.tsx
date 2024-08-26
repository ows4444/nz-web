'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC, ReactNode } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface HGroupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const HGroupStyled = styled.hgroup<Partial<HGroupProps>>`${({ theme }) => theme&&theme.generateCSS(Components.HGROUP)};`;

const HGroup: FC<HGroupProps> = ({ children, ...rest }: HGroupProps) => (
  <HGroupStyled {...rest}>{children}</HGroupStyled>
);

export default HGroup;
