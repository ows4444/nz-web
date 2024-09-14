'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@styles/theme/types';
type TDProps = Layout<ComponentProps<'td'>>;

const TDStyled = styled.td<TDProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.TD, props)};
`;

const TD: FC<TDProps> = (props) => <TDStyled {...props} />;

export default TD;
