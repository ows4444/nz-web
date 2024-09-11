'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Components } from '@styles/theme/components';
import { Theme } from '@styles/theme';
import { BasicLayout } from '@components/types';

type BProps = BasicLayout<ComponentProps<'b'>> & {
  content: string;
};
const BStyled = styled.b<BProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.B, props)};
`;

const B: FC<BProps> = (props) => <BStyled {...props}>{props.content}</BStyled>;

export default B;
