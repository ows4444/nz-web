'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import Section from '@components/core/atoms/section/section';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    theme?: Theme;
  children?: ReactNode;
}

const ContainerStyled = styled(Section)<ContainerProps>``;

const Container: FC<ContainerProps> = ({ children, ...rest }) => (
  <ContainerStyled {...rest}>{children}</ContainerStyled>
);

/**
 * DONE
 */
export default Container;
