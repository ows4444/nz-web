'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type AProps = Layout<ComponentProps<'a'>> & {
  title: string;
};

const AStyled = styled.a<AProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.A, props)}
`;
const A: FC<AProps> = (props) => <AStyled {...props}>{props.title}</AStyled>;

export default A;
