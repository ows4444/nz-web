import type React from 'next';
import { LoginForm } from '@forms/login.form';
import PublicTemplate from '@components/templates/public.template';

export default async function Page() {
  return (
    <PublicTemplate>
      <LoginForm />
    </PublicTemplate>
  );
}
