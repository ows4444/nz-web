'use client';
import React from 'react';
import generateComponents, { component } from '@components/index';

import { login } from '@server/login';
import { useFormState } from 'react-dom';
import { Form } from '@components/core/atoms';

interface DynamicFormProps {
  formSchema: component;
}

export function DynamicForm({ formSchema }: Readonly<DynamicFormProps>) {
  const [state, action] = useFormState<object, FormData>(login, { url: 'auth/login', method: 'POST' });

  console.log({ state });

  return (
    <Form name="login" action={action} id="login-form">
      {generateComponents(formSchema)}
    </Form>
  );
}
