'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MapProps extends ComponentProps<'map'> {
  children?: ReactNode;
}

const MapStyled = styled.map<MapProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.MAP)};
`;

const Map: FC<MapProps> = (props) => <MapStyled {...props}/>;{children}</MapStyled>;

/**
 * DONE
 */
export default Map;
