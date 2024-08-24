'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
export interface AProps extends HTMLAttributes<HTMLElement> {
  theme?: any;
  content: string;
}
const BStyled = styled.b<Partial<AProps>>``;
const B: FC<AProps> = ({ content, ...rest }) => <BStyled {...rest}>{content}</BStyled>;

/**
 * DONE
 */
export default B;
