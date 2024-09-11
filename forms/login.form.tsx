'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import { login } from '@server/login';

import Card from '@components/organisms/card/card';
import InputGroup from '@components/molecules/input-group/input-group';
import CardHeader from '@components/molecules/card-header/card-header';
import CardFooter from '@components/molecules/card-footer/card-footer';
import CardBody from '@components/molecules/card-body/card-body';
import Button from '@components/core/atoms/button/button';
import Form from '@components/core/atoms/form/form';
import H3 from '@components/core/atoms/h3/h3';

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
    <Form $margin="xxl" action={action} id="login-form" name="login-form">
      <Card $layout="flex" $direction="column" $alignItems="center" $border="thin" $margin="sm" $padding="sm">
        <CardHeader>
          <H3 content="Login" />
        </CardHeader>
        <CardBody $margin="md" $layout="grid" $columns="">
          <InputGroup $margin="xs" $layout="grid" label="Email" name="email" type="email" autoComplete="on" />
          <InputGroup $margin="xs" $layout="grid" label="Password" name="password" type="password" autoComplete="on" />
          {state?.message && <p>{state.message}</p>}
        </CardBody>
        <CardFooter>
          <Button title={'Login'} />
        </CardFooter>
      </Card>
    </Form>
  );
}
