'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@styles/theme/types';
type InputProps = Layout<ComponentProps<'input'>>;

const InputStyled = styled.input<InputProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.INPUT, props)}}
`;

const Input: FC<InputProps> = (props) => <InputStyled {...props} />;

export default Input;
