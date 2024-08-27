'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FormProps extends ComponentProps<'form'> {
  theme?: Theme;
  children?: ReactNode;
}

const FormStyled = styled.form<FormProps>`
  ${({ theme }) => theme && theme.generateCSS(Components.FORM)}
`;

const Form: FC<FormProps> = (props) => <FormStyled {...props} />;

/**
 * DONE
 */
export default Form;
