'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface MainProps extends ComponentProps<'main'> {
  theme?: Theme;
  children?: ReactNode;
}

const MainStyled = styled.main<MainProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.MAIN, props)};
`;

const Main: FC<MainProps> = (props) => <MainStyled {...props} />;

/**
 * DONE
 */
export default Main;
