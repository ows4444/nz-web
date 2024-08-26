'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Components } from '@styles/theme/components';
export interface BProps extends HTMLAttributes<HTMLElement> {
  content: string;
}
const BStyled = styled.b<Partial<BProps>>`${({ theme }) => theme&&theme.generateCSS(Components.B)};`;
const B: FC<BProps> = ({ content, ...rest }) => <BStyled {...rest}>{content}</BStyled>;

/**
 * DONE
 */
export default B;
