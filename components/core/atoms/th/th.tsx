'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface THProps extends ComponentProps<'th'> {
  content: string;
}

const THStyled = styled.th<Omit<THProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.TH)};
`;

/**
 * DONE
 */
const TH: FC<THProps> = ({ content, ...rest }: THProps) => <THStyled {...rest}>{content}</THStyled>;

export default TH;
