'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FigcaptionProps extends ComponentProps<'figcaption'> {
  children?: ReactNode;
}

const FigcaptionStyled = styled.fieldset<FigcaptionProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.FIGCAPTION)};
`;

const Figcaption: FC<FigcaptionProps> = (props) => <FigcaptionStyled {...props} />;

/**
 * DONE
 */
export default Figcaption;
