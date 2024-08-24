'use client';

import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
}
const CaptionStyled = styled.caption<Partial<CaptionProps>>``;
const B: FC<CaptionProps> = ({ ...rest }) => <CaptionStyled {...rest} />;

/**
 * DONE
 */
export default B;
