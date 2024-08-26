'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import Section from '@components/core/atoms/section/section';
import { Theme } from '@styles/theme';

export interface ContainerProps extends ComponentProps<'section'> {
  children?: ReactNode;
}

const ContainerStyled = styled(Section)<ContainerProps & { theme: Theme }>``;

const Container: FC<ContainerProps> = (props) => <ContainerStyled {...props} />;

/**
 * DONE
 */
export default Container;
