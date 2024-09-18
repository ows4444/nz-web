'use client';

import { ComponentProps } from 'react';
import type React from 'next';
import styled from 'styled-components';

import Container from '@components/atoms/container/container';
import { Theme } from '@styles/theme';
import { Layout } from '@styles/theme/types';

type AuthTemplateProps = Layout<ComponentProps<'section'>>;

const AuthTemplateStyled = styled.section<AuthTemplateProps & { theme: Theme }>``;

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, ...props }: AuthTemplateProps) => (
	<Container>
		<AuthTemplateStyled {...props}>{children}</AuthTemplateStyled>
	</Container>
);

export default AuthTemplate;
