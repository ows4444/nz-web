'use client';
import React from 'react';
import styled from 'styled-components';
import type { ReactNode, FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

export interface FormProps extends ComponentProps<'form'> {
  theme?: Theme;
  children?: ReactNode;
  id: string;
  name: string;
}

const FormStyled = styled.form<FormProps>`
  ${({ theme ,...props }) => theme && theme.generateCSS(Components.FORM,props)}
`;

const Form: FC<FormProps> = (props) => <FormStyled {...props} />;

/**
 * DONE
 */
export default Form;
