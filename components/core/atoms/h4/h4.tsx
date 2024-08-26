'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H4Props extends ComponentProps<'h4'> {
  content: string;
}

const H4Styled = styled.h4<H4Props & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.H4)};
`;

/**
 * DONE
 */
const H4: FC<H4Props> = (props) => <H4Styled {...props}>{props.content}</H4Styled>;

export default H4;
