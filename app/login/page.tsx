import type React from 'next';
import { LoginForm } from '@forms/login.form';
import AuthTemplate from '@components/templates/auth.template';

export default function Login() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
