'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OptGroupProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const OptGroupStyled = styled.optgroup<OptGroupProps>`${({ theme }) => theme&&theme.generateCSS(Components.OPTGROUP)};`;

const OptGroup: FC<OptGroupProps> = ({ children, ...rest }) => <OptGroupStyled {...rest}>{children}</OptGroupStyled>;

/**
 * DONE
 */
export default OptGroup;
