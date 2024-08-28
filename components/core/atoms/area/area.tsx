'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type AreaProps = Layout<ComponentProps<'area'>>;

const AreaStyled = styled.area<AreaProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.AREA, props)};
`;
const Area: FC<AreaProps> = (props) => <AreaStyled {...props} />;

export default Area;
