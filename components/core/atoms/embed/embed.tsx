'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface EmbedProps extends ComponentProps<'embed'> {
  children?: ReactNode;
}

const EmbedStyled = styled.embed<EmbedProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.EMBED,props)};
`;

const Embed: FC<EmbedProps> = (props) => <EmbedStyled {...props} />;

/**
 * DONE
 */
export default Embed;
