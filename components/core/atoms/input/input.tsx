'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface InputProps extends ComponentProps<'input'> {}

const InputStyled = styled.input<InputProps & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.INPUT)}}
`;

/**
 * DONE
 */
const Input: FC<InputProps> = (props) => <InputStyled {...props} />;

export default Input;
