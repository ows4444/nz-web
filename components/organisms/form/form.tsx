import type React from 'next';
import styled from 'styled-components';

export interface FormProps extends React.ComponentProps<'form'> {}

const FormStyled = styled.form<FormProps>``;

const Form: React.FC<FormProps> = ({ children, ...rest }: FormProps) => <FormStyled {...rest}>{children}</FormStyled>;

export default Form;
