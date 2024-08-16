'use client';

import type React from 'next';
import { useFormState } from 'react-dom';
import { login } from '@server/login';

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
    <form action={action}>
      <input name="email" type="text" placeholder="Email" />
      {state && state.data.email && state.data.email.map((error, id) => <p key={id}>{error}</p>)}
      <input name="password" type="password" placeholder="Password" />

      {state && state.data.password && state.data.password.map((error, id) => <p key={id}>{error}</p>)}
      <button type="submit">Login</button>

      {state && state.error && <p>{state.error}</p>}
    </form>
  );
}
