'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type MapProps = Layout<ComponentProps<'map'>>;

const MapStyled = styled.map<MapProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.MAP, props)};
`;

const Map: FC<MapProps> = (props) => <MapStyled {...props} />;

export default Map;
