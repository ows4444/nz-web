'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface PreProps extends ComponentProps<'pre'> {
  content: string;
}

const PreStyled = styled.pre<PreProps & { theme: Theme }>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.PRE,props)};
`;

/**
 * DONE
 */
const Pre: FC<PreProps> = (props) => <PreStyled {...props}>{props.content}</PreStyled>;

export default Pre;
