'use client';
import React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  theme?: Theme;
}

const InputStyled = styled.input<Partial<InputProps>>``;

/**
 * DONE
 */
const Input: FC<InputProps> = ({ ...rest }: InputProps) => <InputStyled {...rest} />;

export default Input;
