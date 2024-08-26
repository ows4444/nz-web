'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AddressProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}
const AddressStyled = styled.address<AddressProps>`
  ${({ theme }) => theme&&theme.generateCSS(Components.ADDRESS)}
`;
const Address: FC<AddressProps> = ({ children, ...rest }) => <AddressStyled {...rest}>{children}</AddressStyled>;

/**
 * DONE
 */
export default Address;
