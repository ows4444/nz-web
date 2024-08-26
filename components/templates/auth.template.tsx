'use client';

import Container from '@components/atoms/container/container';
import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface AuthTemplateProps extends React.ComponentProps<'section'> {}

const AuthTemplateStyled = styled.section<AuthTemplateProps & { theme: Theme }>``;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, ...props }: AuthTemplateProps) => (
  <Container>
    <AuthTemplateStyled {...props}>{children}</AuthTemplateStyled>
  </Container>
);

export default AuthTemplate;
