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
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.HGROUP,props)};
`;

const HGroup: FC<HGroupProps> = (props) => <HGroupStyled {...props} />;

export default HGroup;
