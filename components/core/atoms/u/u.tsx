'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface UProps extends ComponentProps<'u'> {
  content: string;
}

const UStyled = styled.u<UProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.U,props)};
`;

/**
 * DONE
 */
const U: FC<UProps> = (props) => <UStyled {...props}>{props.content}</UStyled>;

export default U;
