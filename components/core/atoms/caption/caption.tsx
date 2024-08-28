'use client';

import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';
import { Layout } from '@components/types';

type CaptionProps = Layout<ComponentProps<'caption'>>;

const CaptionStyled = styled.caption<CaptionProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.CAPTION, props)};
`;

const Caption: FC<CaptionProps> = (props) => <CaptionStyled {...props} />;

export default Caption;
