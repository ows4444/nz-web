'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface LiProps extends ComponentProps<'li'> {
  content: string;
}

const LiStyled = styled.li<LiProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.LI, props)};
`;

/**
 * DONE
 */
const Li: FC<LiProps> = (props) => <LiStyled {...props}>{props.content}</LiStyled>;

export default Li;
