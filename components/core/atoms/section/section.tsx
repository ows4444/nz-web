'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ReactNode, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface SectionProps extends ComponentProps<'section'> {
  children?: ReactNode;
}

const SectionStyled = styled.section<SectionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.SECTION, props)};
`;

const Section: FC<SectionProps> = (props) => <SectionStyled {...props} />;

export default Section;
