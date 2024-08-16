'use client';

import type React from 'next';
import { useRouter } from 'next/navigation';
import { useTransition, useEffect } from 'react';
import { useFormState } from 'react-dom';

import profile from '@server/profile';
import Button from '@components/atoms/button/button';

const Home: React.FC = () => {
  const router = useRouter();

  const [_user, formAction] = useFormState(profile, { user: {} });
  const [isPending, StartTransaction] = useTransition();

  useEffect(() => {
    StartTransaction(() => formAction({ redirectTo: '/login', ShouldFailed: true }));
  }, [formAction]);

  return (
    <div>{!isPending ? <div>Loading...</div> : <Button title="Logout" onClick={() => router.push('/logout')} />}</div>
  );
};

export default Home;
