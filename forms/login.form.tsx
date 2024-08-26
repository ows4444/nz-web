'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import { login } from '@server/login';

import Card from '@components/organisms/card/card';
import InputGroup from '@components/molecules/input-group/input-group';
import CardHeader from '@components/molecules/card-header/card-header';
import CardFooter from '@components/molecules/card-footer/card-footer';
import CardBody from '@components/molecules/card-body/card-body';
import FlexBox from '@components/atoms/flex-box/flex-box';
import H2 from '@components/core/atoms/h2/h2';
import Button from '@components/core/atoms/button/button';
import Form from '@components/core/atoms/form/form';

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
    <Form action={action}>
      <Card>
        <CardHeader>
          <FlexBox $justifyContent="center">
            <H2 content={'Login'} />
          </FlexBox>
        </CardHeader>
        <CardBody>
          <FlexBox $gap="4px" $justifyContent="center" $direction="column" $alignItems="flex-end">
            <InputGroup label="Email" name="email" inputType="text" />
            <InputGroup label="Password" name="password" inputType="password" />
            {state && state.error && <p>{state.error}</p>}
          </FlexBox>
        </CardBody>
        <CardFooter>
          <FlexBox $justifyContent="center">
            <Button title={'Login'} />
          </FlexBox>
        </CardFooter>
      </Card>
    </Form>
  );
}
