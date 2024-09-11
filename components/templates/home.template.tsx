'use client';
import type React from 'next';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import { Layout } from '@components/types';
import Box from '@components/atoms/box/box';
import Container from '@components/atoms/container/container';
import { Header, H1, Footer, P } from '@components/core/atoms';

type HomeTemplateProps = Layout<ComponentProps<'section'>>;
const HomeTemplateStyled = styled.section<HomeTemplateProps & { theme: Theme }>``;
const HomeTemplate: React.FC<HomeTemplateProps> = ({ children, ...props }: HomeTemplateProps) => (
  <Box $layout="grid">
    <Header $margin="xxl" $layout="flex" $alignItems="center" $justifyContent="center">
      <H1 content="Nizaami" />
    </Header>
    <Container $marginLeft="xxl" $marginRight="xxl">
      <HomeTemplateStyled {...props}>{children}</HomeTemplateStyled>
    </Container>
    <Footer $margin="xxl" $layout="flex" $alignItems="center" $justifyContent="center" $bottom="0px">
      <P content="© 2024 Nizaami. All rights reserved." />
    </Footer>
  </Box>
);

export default HomeTemplate;
