'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MapProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const MapStyled = styled.map<MapProps>`${({ theme }) => theme&&theme.generateCSS(Components.MAP)};`;

const Map: FC<MapProps> = ({ children, ...rest }) => <MapStyled {...rest}>{children}</MapStyled>;

/**
 * DONE
 */
export default Map;
