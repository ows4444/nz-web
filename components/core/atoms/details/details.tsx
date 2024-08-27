'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DetailsProps extends ComponentProps<'details'> {
  children?: ReactNode;
}

const DetailsStyled = styled.details<DetailsProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.DETAILS,props)};
`;

const DETAILS: FC<DetailsProps> = (props) => <DetailsStyled {...props} />;

/**
 * DONE
 */
export default DETAILS;
