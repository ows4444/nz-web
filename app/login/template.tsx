import AuthTemplate from '@components/templates/auth.template';
import React from 'react';

export default async function LoginTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthTemplate>{children}</AuthTemplate>;
}
