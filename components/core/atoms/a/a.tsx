'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface AProps extends ComponentProps<'a'> {
  title: string;
}

const AStyled = styled.a<AProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.A)}
`;
const A: FC<AProps> = (props) => <AStyled {...props}>{props.title}</AStyled>;

/**
 * DONE
 */
export default A;
