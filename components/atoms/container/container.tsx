'use client';
import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';
import Section from '@components/core/atoms/section/section';

type ContainerProps = Layout<ComponentProps<'div'>>;

const ContainerStyled = styled(Section)<ContainerProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CONTAINER, props)};
`;

const Container: FC<ContainerProps> = (props) => <ContainerStyled {...props} />;

export default Container;
