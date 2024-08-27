'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AsideProps extends ComponentProps<'aside'> {
  children?: ReactNode;
}
const AsideStyled = styled.aside<AsideProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.ASIDE,props)};
`;
const Aside: FC<AsideProps> = (props) => <AsideStyled {...props}/>; 

/**
 * DONE
 */
export default Aside;
