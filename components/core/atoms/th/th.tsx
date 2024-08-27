'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface THProps extends ComponentProps<'th'> {
  content: string;
}

const THStyled = styled.th<THProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.TH, props)};
`;

/**
 * DONE
 */
const TH: FC<THProps> = (props) => <THStyled {...props}>{props.content}</THStyled>;

export default TH;
