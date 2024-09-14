'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';

type THProps = Layout<ComponentProps<'th'>> & {
  content: string;
};

const THStyled = styled.th<THProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TH, props)};
`;

const TH: FC<THProps> = (props) => <THStyled {...props}>{props.content}</THStyled>;

export default TH;
