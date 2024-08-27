'use client';

import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface CaptionProps extends ComponentProps<'caption'> {}

const CaptionStyled = styled.caption<CaptionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.CAPTION, props)};
`;

const Caption: FC<CaptionProps> = (props) => <CaptionStyled {...props} />;

/**
 * DONE
 */
export default Caption;
