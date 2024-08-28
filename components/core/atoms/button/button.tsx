'use client';
import React from 'react';
import styled from 'styled-components';
import type { ComponentProps, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

const ButtonStyled = styled.button<ButtonProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.BUTTON, props)}
`;
const Button: FC<ButtonProps> = (props) => <ButtonStyled {...props}>{props.title}</ButtonStyled>;

export default Button;
