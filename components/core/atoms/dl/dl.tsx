'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DLProps extends ComponentProps<'dl'> {
  children?: ReactNode;
}

const DLStyled = styled.dl<DLProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.DL,props)};
`;

const DL: FC<DLProps> = (props) => <DLStyled {...props} />;

/**
 * DONE
 */
export default DL;
