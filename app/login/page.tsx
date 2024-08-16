'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import login from '@server/login';
import profile from '@server/profile';
import { ResponseState } from './login.response';
import { useEffect, useTransition } from 'react';
import Button from '@components/atoms/button/button';
import Input from '@components/atoms/input/input';
import Card from '@components/organisms/card/card';

export default function Login() {
  const [_user, formActionProfile] = useFormState(profile, { user: {} });
  const [isPendingAuth, startTransitionCheckAuth] = useTransition();
  const [isPendingLogin, startTransitionLogin] = useTransition();
  const [state, formAction] = useFormState<ResponseState, any>(login, {
    message: '',
  });

  const isPending = isPendingLogin || isPendingAuth;

  useEffect(() => {
    if (isPendingAuth) {
      startTransitionCheckAuth(() => formActionProfile({ redirectTo: '/', ShouldFailed: false }));
    }
  }, [formActionProfile, isPendingAuth]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransitionLogin(() => formAction(new FormData(e.currentTarget)));
  };

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <Card title="Login" $variant="Primary" $size="Medium">
          <form onSubmit={handleSubmit}>
            <Input name="email" type="email" $variant="Primary" />
            {state.data?.email?.map((message, idx) => <div key={idx}>{message}</div>)}
            <Input name="password" type="password" $variant="Primary" />
            {state.data?.password?.map((message, idx) => <div key={idx}>{message}</div>)}
            <Button title="Login" type="submit" $variant="Primary" />
            <h2>{state.message}</h2>
          </form>
        </Card>
      )}
    </>
  );
}
