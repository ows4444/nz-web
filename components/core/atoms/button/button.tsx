'use client';
import React from 'react';
import styled from 'styled-components';
import type { ComponentProps, FC } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

const ButtonStyled = styled.button<Omit<ButtonProps, 'title'> & { theme: Theme }>`
  ${({ theme }) => theme && theme.generateCSS(Components.BUTTON)}
`;
const Button: FC<ButtonProps> = ({ title, children, ...rest }) => (
  <ButtonStyled {...rest}>
    {title}
    {children}
  </ButtonStyled>
);

/**
 * DONE
 */
export default Button;
