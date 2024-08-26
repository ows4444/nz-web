'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface StrongProps extends ComponentProps<'strong'> {
  content: string;
}

const StrongStyled = styled.strong<Omit<StrongProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.STRONG)};
`;

/**
 * DONE
 */
const Strong: FC<StrongProps> = ({ content, ...rest }: StrongProps) => <StrongStyled {...rest}>{content}</StrongStyled>;

export default Strong;
