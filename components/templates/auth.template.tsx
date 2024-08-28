'use client';

import Container from '@components/atoms/container/container';
import { Layout } from '@components/types';
import { Theme } from '@styles/theme';
import type React from 'next';
import { ComponentProps } from 'react';
import styled from 'styled-components';

type AuthTemplateProps = Layout<ComponentProps<'section'>>;

const AuthTemplateStyled = styled.section<AuthTemplateProps & { theme: Theme }>``;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, ...props }: AuthTemplateProps) => (
  <Container>
    <AuthTemplateStyled {...props}>{children}</AuthTemplateStyled>
  </Container>
);

export default AuthTemplate;
