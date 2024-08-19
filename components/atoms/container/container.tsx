'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';
import Section from '../section/section';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  $Full?: Boolean;
  $WidthPercent?: number;
  theme?: Theme;
}

const Container = styled(Section)<ContainerProps>`
  ${({ $Full, $WidthPercent }) => ($Full ? 'width: 100%;' : `width: ${$WidthPercent ?? '75'}%;`)};
  margin: 0 auto;
`;

export default Container;
