'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SmallProps extends ComponentProps<'small'> {
  content: string;
}

const SmallStyled = styled.small<SmallProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SMALL, props)};
`;

/**
 * DONE
 */
const Small: FC<SmallProps> = (props) => <SmallStyled {...props}>{props.content}</SmallStyled>;

export default Small;
