'use client';

import Container from '@components/atoms/container/container';
import type React from 'next';
import styled from 'styled-components';

export interface AuthTemplateProps extends React.ComponentProps<'section'> {}

const AuthTemplateStyled = styled.section<AuthTemplateProps>``;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, ...rest }: AuthTemplateProps) => (
  <Container>
    <AuthTemplateStyled {...rest}>{children}</AuthTemplateStyled>
  </Container>
);

export default AuthTemplate;
