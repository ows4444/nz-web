'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DDProps extends ComponentProps<'dd'> {
  children?: ReactNode;
}

const DDStyled = styled.dd<DDProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.DD,props)};
`;

const DD: FC<DDProps> = (props) => <DDStyled {...props} />;

/**
 * DONE
 */
export default DD;
