'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import Section from '@components/core/atoms/section/section';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface ContainerProps extends ComponentProps<'section'> {
  children?: ReactNode;
}

const ContainerStyled = styled(Section)<ContainerProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CONTAINER, props)};
`;

const Container: FC<ContainerProps> = (props) => <ContainerStyled {...props} />;

/**
 * DONE
 */
export default Container;
