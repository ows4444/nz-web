'use client';

import { Size, Sizes, Theme } from '@styles/theme';
import type React from 'next';
import styled from 'styled-components';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  $size: Size;
  theme?: Theme;
}

const SectionStyled = styled.section<SectionProps>`
`;

const Section: React.FC<SectionProps> = ({ $size = Sizes.Default, children, ...rest }: SectionProps) => (
  <SectionStyled $size={$size} {...rest}>
    {children}
  </SectionStyled>
);

export default Section;
