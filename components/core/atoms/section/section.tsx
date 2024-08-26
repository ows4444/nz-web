'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC, ReactNode } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children?: ReactNode;
}

const SectionStyled = styled.section<SectionProps>`${({ theme }) => theme&&theme.generateCSS(Components.SECTION)};`;

const Section: FC<SectionProps> = ({ children, ...rest }: SectionProps) => (
  <SectionStyled {...rest}>{children}</SectionStyled>
);

export default Section;
