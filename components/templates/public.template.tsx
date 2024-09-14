'use client';
import type React from 'next';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import Box from '@components/atoms/box/box';
import Container from '@components/atoms/container/container';
import { Header, H1, Footer, P } from '@components/core/atoms';
import { Layout } from '@styles/theme/types';

type PublicTemplateProps = Layout<ComponentProps<'section'>>;
const PublicTemplateStyled = styled.section<PublicTemplateProps & { theme: Theme }>``;
const PublicTemplate: React.FC<PublicTemplateProps> = ({ children, ...props }: PublicTemplateProps) => (
  <Box
    $layout="grid"
    $width="100vw"
    $height="100vh"
    $gridTemplateAreas={[
      'Header',
      'Nav',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Container',
      'Footer',
    ]}
  >
    <Header
      $layoutItem="grid-item"
      $gridArea="Header"
      $layout="flex"
      $alignItems="center"
      $justifyContent="center"
      $backgroundColor="background"
      $color="black"
    >
      <H1 content="Nizaami" />
    </Header>
    <Container $layoutItem="grid-item" $gridArea="Container" $marginX="10px" $overflow="auto">
      <PublicTemplateStyled {...props}>{children}</PublicTemplateStyled>
    </Container>
    <Footer
      $layoutItem="grid-item"
      $gridArea="Footer"
      $layout="flex"
      $alignItems="center"
      $justifyContent="center"
      $bottom="0px"
      $color="black"
      $backgroundColor="background"
    >
      <P content="© 2024 Nizaami. All rights reserved." />
    </Footer>
  </Box>
);

export default PublicTemplate;
