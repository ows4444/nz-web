'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  theme?: Theme;
}

const InputStyled = styled.input<Partial<InputProps>>`
  ${({ theme }) => theme&&theme.generateCSS(Components.INPUT)}}
`;

/**
 * DONE
 */
const Input: FC<InputProps> = ({ ...rest }: InputProps) => <InputStyled {...rest} />;

export default Input;
