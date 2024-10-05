'use client';

import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type AddressProps = Layout<ComponentProps<'address'>>;

const AddressStyled = styled.address<AddressProps & { theme: Theme }>`
	${({ theme, ...props }) => theme?.generateCSS?.(Components.ADDRESS, props)}
`;
const Address: FC<AddressProps> = ({ innerRef, ...props }) => <AddressStyled ref={innerRef} {...props} />;

export default Address;
