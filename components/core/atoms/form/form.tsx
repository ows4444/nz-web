'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, HTMLAttributes, FC } from 'react';
import { Theme } from '@styles/theme';

export interface FormProps extends HTMLAttributes<HTMLElement> {
  theme?: Theme;
  children: ReactNode;
}

const FormStyled = styled.form<FormProps>``;

const Form: FC<FormProps> = ({ children, ...rest }) => <FormStyled {...rest}>{children}</FormStyled>;

/**
 * DONE
 */
export default Form;
