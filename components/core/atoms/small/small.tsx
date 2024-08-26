'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SmallProps extends ComponentProps<'small'> {
  content: string;
}

const SmallStyled = styled.p<Omit<SmallProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.SMALL)};
`;

/**
 * DONE
 */
const Small: FC<SmallProps> = ({ content, ...rest }: SmallProps) => <SmallStyled {...rest}>{content}</SmallStyled>;

export default Small;
