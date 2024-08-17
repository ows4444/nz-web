import Button from '@components/atoms/button/button';
import FlexBox from '@components/atoms/flex-box/flex-box';
import type React from 'next';
import styled from 'styled-components';

export interface FormProps extends React.ComponentProps<'form'> {
  $submitButtonTitle: string;
}

const FormStyled = styled.form<Omit<FormProps, '$submitButtonTitle'>>``;

const Form: React.FC<FormProps> = ({ $submitButtonTitle, children, ...rest }: FormProps) => (
  <FlexBox>
    <FormStyled {...rest}>
      {children}
      <Button $title={$submitButtonTitle} />
    </FormStyled>
  </FlexBox>
);

export default Form;
