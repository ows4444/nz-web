'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LiProps extends ComponentProps<'li'> {
  content: string;
}

const LiStyled = styled.li<Omit<LiProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.LI)};
`;

/**
 * DONE
 */
const Li: FC<LiProps> = ({ content, ...rest }: LiProps) => <LiStyled {...rest}>{content}</LiStyled>;

export default Li;
