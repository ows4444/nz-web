'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type EmbedProps = Layout<ComponentProps<'embed'>>;

const EmbedStyled = styled.embed<EmbedProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.EMBED, props)};
`;

const Embed: FC<EmbedProps> = (props) => <EmbedStyled {...props} />;

export default Embed;
