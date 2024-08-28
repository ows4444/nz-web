'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { BasicLayout } from '@components/types';

type SupProps = BasicLayout<ComponentProps<'sup'>> & {
  content: string;
};

const SupStyled = styled.sup<SupProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.SUP, props)}
`;

const Sup: FC<SupProps> = (props) => <SupStyled {...props}>{props.content}</SupStyled>;

export default Sup;
