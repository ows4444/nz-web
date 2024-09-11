import type React from 'next';
import { LoginForm } from '@forms/login.form';
import AuthTemplate from '@components/templates/auth.template';

export default async function Page() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
