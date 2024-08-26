'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface AProps extends ComponentProps<'a'> {
  title: string;
}

const AStyled = styled.a<Omit<AProps, 'title'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.A)}
`;
const A: FC<AProps> = ({ title, children, ...rest }) => (
  <AStyled {...rest}>
    {title}
    {children}
  </AStyled>
);

/**
 * DONE
 */
export default A;
