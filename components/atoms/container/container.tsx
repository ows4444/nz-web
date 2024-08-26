'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import Section from '@components/core/atoms/section/section';
import { Theme } from '@styles/theme';

export interface ContainerProps extends ComponentProps<'section'> {
  children?: ReactNode;
}

interface ThemeProps {
  theme?: Theme;
}

const ContainerStyled = styled(Section)<ThemeProps>``;

const Container: FC<ContainerProps> = ({ children, ...rest }) => (
  <ContainerStyled {...rest}>{children}</ContainerStyled>
);

/**
 * DONE
 */
export default Container;
