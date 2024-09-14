'use client';
import styled from 'styled-components';
import React, { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type AddressProps = Layout<ComponentProps<'address'>>;

const AddressStyled = styled.address<AddressProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.ADDRESS, props)}
`;
const Address: FC<AddressProps> = (props) => <AddressStyled {...props} />;

export default Address;
