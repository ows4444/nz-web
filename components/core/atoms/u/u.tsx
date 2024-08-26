'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface UProps extends ComponentProps<'u'> {
  content: string;
}

const UStyled = styled.u<Omit<UProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.U)};
`;

/**
 * DONE
 */
const U: FC<UProps> = ({ content, ...rest }: UProps) => <UStyled {...rest}>{content}</UStyled>;

export default U;
