'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
export interface BProps extends HTMLAttributes<HTMLElement> {
  content: string;
}
const BStyled = styled.b<Partial<BProps>>``;
const B: FC<BProps> = ({ content, ...rest }) => <BStyled {...rest}>{content}</BStyled>;

/**
 * DONE
 */
export default B;
