'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface H3Props extends ComponentProps<'h3'> {
  content: string;
}

const H3Styled = styled.h3<H3Props & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.H3)};
`;

/**
 * DONE
 */
const H3: FC<H3Props> = (props) => <H3Styled {...props}>{props.content}</H3Styled>;

export default H3;
