'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
export interface AddressProps extends HTMLAttributes<HTMLElement> {
  theme?: any;
  children: ReactNode;
}
const AddressStyled = styled.address<AddressProps>``;
const Address: FC<AddressProps> = ({ children, ...rest }) => <AddressStyled {...rest}>{children}</AddressStyled>;

/**
 * @name Address
 * @description Address
 * @param {AddressProps} props
 * @returns {React.ReactElement}
 * @example <Address> </Address>
 * DONE 
 */
export default Address;
