'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface InsProps extends ComponentProps<'ins'> {
  content: string;
}

const InsStyled = styled.ins<Omit<InsProps, 'content'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.INS)};
`;

/**
 * DONE
 */
const Ins: FC<InsProps> = ({ content, ...rest }: InsProps) => <InsStyled {...rest}>{content}</InsStyled>;

export default Ins;
