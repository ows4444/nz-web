'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface StrongProps extends ComponentProps<'strong'> {
  content: string;
}

const StrongStyled = styled.strong<StrongProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme && theme.generateCSS(Components.STRONG, props)};
`;

/**
 * DONE
 */
const Strong: FC<StrongProps> = (props) => <StrongStyled {...props}>{props.content}</StrongStyled>;

export default Strong;
