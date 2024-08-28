'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AddressProps extends ComponentProps<'address'> {
  children?: ReactNode;
}
const AddressStyled = styled.address<AddressProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.ADDRESS, props)}
`;
const Address: FC<AddressProps> = (props) => <AddressStyled {...props} />;

/**
 * DONE
 */
export default Address;
