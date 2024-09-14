'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import { login } from '@server/login';

import { Card } from '@components/organisms';
import { InputGroup, CardHeader, CardFooter, CardBody } from '@components/molecules';

import { Button, Form, H3 } from '@components/core/atoms';

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
    <Form
      $margin="10px"
      action={action}
      id="login-form"
      name="login-form"
      $layout="grid"
      $xs={{
        $padding: '10px',
        $backgroundColor: 'darkYellow',
      }}
      $sm={{
        $padding: '10px',
        $backgroundColor: 'darkBlue',
      }}
      $md={{ $padding: '10px', $backgroundColor: 'darkGreen' }}
      $lg={{ $padding: '10px', $backgroundColor: 'darkRed' }}
    >
      <Card
        $layout="flex"
        $direction="column"
        $alignItems="center"
        $border="2px solid #a23456"
        $margin="8px"
        $padding="8px"
      >
        <CardHeader>
          <H3 content="Login" />
        </CardHeader>
        <CardBody $margin="10px" $layout="grid">
          <InputGroup $margin="8px" $layout="grid" label="Email" name="email" type="email" autoComplete="on" />
          <InputGroup $margin="8px" $layout="grid" label="Password" name="password" type="password" autoComplete="on" />
          {state?.message && <p>{state.message}</p>}
        </CardBody>
        <CardFooter>
          <Button title={'Login'} $paddingX="10px" $paddingY="8px" />
        </CardFooter>
      </Card>
    </Form>
  );
}
