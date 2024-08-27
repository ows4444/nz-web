'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SubProps extends ComponentProps<'sub'> {
  content: string;
}

const SubStyled = styled.sub<SubProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.SUB,props)};
`;

/**
 * DONE
 */
const Sub: FC<SubProps> = (props) => <SubStyled {...props}>{props.content}</SubStyled>;

export default Sub;
