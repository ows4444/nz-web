'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface OlProps extends ComponentProps<'ol'> {
  children?: ReactNode;
}

const OlStyled = styled.ol<OlProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.OL)};
`;

const Ol: FC<OlProps> = ({ children, ...rest }) => <OlStyled {...rest}>{children}</OlStyled>;

/**
 * DONE
 */
export default Ol;
