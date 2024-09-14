'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type TBodyProps = Layout<ComponentProps<'tbody'>>;

const TBodyStyled = styled.tbody<TBodyProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TBODY, props)};
`;

const TBody: FC<TBodyProps> = (props) => <TBodyStyled {...props} />;

export default TBody;
