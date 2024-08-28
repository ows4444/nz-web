'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface DelProps extends ComponentProps<'del'> {
  children?: ReactNode;
}

const DelStyled = styled.del<DelProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.DEL, props)};
`;

const DEL: FC<DelProps> = (props) => <DelStyled {...props} />;

/**
 * DONE
 */
export default DEL;
