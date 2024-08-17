'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import { login } from '@server/login';

import Card from '@components/organisms/card/card';
import Form from '@components/organisms/form/form';
import InputGroup from '@components/molecules/input-group/input-group'; 

type D = {
  message: string;
  error: string;
  data: {
    [key: string]: string[];
  };
};

const initialState: D = {
  message: '',
  error: '',
  data: {
    email: [],
    password: [],
  },
};

export function LoginForm() {
  const [state, action] = useFormState<D, FormData>(login, initialState);

  return (
    <Card title="Login" $variant={'Default'} $size={'Default'}>
      <Form action={action} $submitButtonTitle="Login">
        <InputGroup
          label={'Email'}
          name={'email'}
          $variant={'Default'}
          inputType={'text'}
          feedBack={state && state.data.email && state.data.email[0]}
        />
        <InputGroup
          label={'Password'}
          name={'password'}
          $variant={'Default'}
          inputType={'password'}
          
          feedBack={state && state.data.password && state.data.password[0]}
        />

        {state && state.error && <p>{state.error}</p>}
      </Form>
    </Card>
  );
}
