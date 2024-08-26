'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ReactNode, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface HGroupProps extends ComponentProps<'hgroup'> {
  theme?: Theme;
  children?: ReactNode;
}

const HGroupStyled = styled.hgroup<HGroupProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.HGROUP)};
`;

const HGroup: FC<HGroupProps> = ({ children, ...props }: HGroupProps) => (
  <HGroupStyled {...props}/>;{children}</HGroupStyled>
);

export default HGroup;
