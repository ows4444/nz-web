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
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.OL, props)};
`;

const Ol: FC<OlProps> = (props) => <OlStyled {...props} />;

/**
 * DONE
 */
export default Ol;
