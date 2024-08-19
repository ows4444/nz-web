'use client';

import { Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: Theme;
}

const SectionStyled = styled.section<SectionProps>``;

const Section: React.FC<SectionProps> = ({ children, ...rest }: SectionProps) => (
  <SectionStyled {...rest}>{children}</SectionStyled>
);

export default Section;
