'use client';
import React from 'react';
import styled from 'styled-components';
import type { FC, ComponentProps } from 'react';
import { Theme } from '@styles/theme';
import { Components } from '@styles/theme/components';

import { Layout } from '@components/types';
type FormProps = Layout<ComponentProps<'form'>> & {
  id: string;
  name: string;
};

const FormStyled = styled.form<FormProps & { theme: Theme }>`
  ${({ theme, ...props }) => theme?.generateCSS?.(Components.FORM, props)}
`;

const Form: FC<FormProps> = (props) => <FormStyled {...props} />;

export default Form;
