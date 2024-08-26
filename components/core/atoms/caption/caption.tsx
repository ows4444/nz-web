'use client';

import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
}
const CaptionStyled = styled.caption<Partial<CaptionProps>>`${({ theme }) => theme&&theme.generateCSS(Components.CAPTION)};`;
const B: FC<CaptionProps> = ({ ...rest }) => <CaptionStyled {...rest} />;

/**
 * DONE
 */
export default B;
