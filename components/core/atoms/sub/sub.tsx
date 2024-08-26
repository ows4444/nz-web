'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SubProps extends ComponentProps<'sub'> {
  content: string;
}

const SubStyled = styled.sub<Omit<SubProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SUB)};
`;

/**
 * DONE
 */
const Sub: FC<SubProps> = ({ content, ...rest }: SubProps) => <SubStyled {...rest}>{content}</SubStyled>;

export default Sub;
