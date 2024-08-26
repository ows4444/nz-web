'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PProps extends ComponentProps<'p'> {
  content: string;
}

const PStyled = styled.p<PProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.P)};
`;

/**
 * DONE
 */
const P: FC<PProps> = (props) => <PStyled {...props}>{props.content}</PStyled>;

export default P;
