'use client';

import GridBox from '@components/atoms/grid-box/grid-box';
import type React from 'next';
import styled from 'styled-components';

export interface AuthTemplateProps extends React.ComponentProps<'section'> {}

const AuthTemplateStyled = styled.section<AuthTemplateProps>`
  height: 100vh;
  width: 100vw;
  background-color: gray;
`;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, ...rest }) => (
  <GridBox $fit>
    <AuthTemplateStyled {...rest}>{children}</AuthTemplateStyled>
  </GridBox>
);

export default AuthTemplate;
