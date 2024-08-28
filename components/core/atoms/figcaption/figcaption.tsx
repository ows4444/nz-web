'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type FigcaptionProps = Layout<ComponentProps<'figcaption'>>;

const FigcaptionStyled = styled.fieldset<FigcaptionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.FIGCAPTION, props)};
`;

const Figcaption: FC<FigcaptionProps> = (props) => <FigcaptionStyled {...props} />;

export default Figcaption;
