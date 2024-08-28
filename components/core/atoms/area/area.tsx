'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
export interface AreaProps extends ComponentProps<'area'> {
  children?: ReactNode;
}
const AreaStyled = styled.area<AreaProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.AREA, props)};
`;
const Area: FC<AreaProps> = (props) => <AreaStyled {...props} />;

/**
 * DONE
 */
export default Area;
