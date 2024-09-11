'use client';
import type React from 'next';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import { Theme } from '@styles/theme';
import { Layout } from '@components/types';
import Box from '@components/atoms/box/box';
import Container from '@components/atoms/container/container';
import { Header, H1, Footer, P, Nav, Input, Ul, Li, A, Div } from '@components/core/atoms';

type HomeTemplateProps = Layout<ComponentProps<'section'>>;
const HomeTemplateStyled = styled.section<HomeTemplateProps & { theme: Theme }>``;
const HomeTemplate: React.FC<HomeTemplateProps> = ({ children, ...props }: HomeTemplateProps) => (
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
      $color="text"
    >
      <H1 content="Nizaami" />
    </Header>
    <Nav $layoutItem="grid-item" $gridArea="Nav">
      <Ul $listStyle="none" $layout="flex" $alignItems="center" $padding="sm">
        <Li $marginRight="md">
          <A
            href="#home"
            title="Home"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
        </Li>
        <Li $marginRight="md">
          <A
            href="#news"
            title="News"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
        </Li>
        <Li $marginRight="md">
          <A
            href="#contact"
            title="Contact"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
        </Li>
        <Li $marginRight="md">
          <A
            href="#about"
            title="About"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
        </Li>

        <Li $marginRight="md">
          <A
            href="#services"
            title="Services"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
          <Div className="dropdown-content">
            <A
              href="#service1"
              title="Service 1"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
            <A
              href="#service2"
              title="Service 2"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
            <A
              href="#service3"
              title="Service 3"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
          </Div>
        </Li>

        <Li className="dropdown" $marginRight="md">
          <A
            href="#more"
            title="More"
            $layout="block"
            $textDecoration="none"
            $paddingTop="sm"
            $paddingBottom="sm"
            $paddingLeft="md"
            $paddingRight="md"
          />
          <Div className="dropdown-content">
            <A
              href="#more1"
              title="More 1"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
            <A
              href="#more2"
              title="More 2"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
            <A
              href="#more3"
              title="More 3"
              $layout="block"
              $textDecoration="none"
              $paddingTop="sm"
              $paddingBottom="sm"
              $paddingLeft="md"
              $paddingRight="md"
            />
          </Div>
        </Li>

        <Li $marginRight="md">
          <Input type="text" placeholder="Search..." />
        </Li>
      </Ul>
    </Nav>
    <Container $layoutItem="grid-item" $gridArea="Container" $marginLeft="xxl" $marginRight="xxl" $overflow="auto">
      <HomeTemplateStyled {...props}>{children}</HomeTemplateStyled>
    </Container>
    <Footer
      $layoutItem="grid-item"
      $gridArea="Footer"
      $layout="flex"
      $alignItems="center"
      $justifyContent="center"
      $bottom="0px"
      $color="text"
      $backgroundColor="background"
    >
      <P content="© 2024 Nizaami. All rights reserved." />
    </Footer>
  </Box>
);

export default HomeTemplate;
