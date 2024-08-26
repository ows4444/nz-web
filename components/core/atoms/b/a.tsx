'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
export interface BProps extends ComponentProps<'b'> {
  content: string;
}
const BStyled = styled.b<Omit<BProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.B)};
`;

const B: FC<BProps> = ({ content, ...rest }) => <BStyled {...rest}>{content}</BStyled>;

/**
 * DONE
 */
export default B;
