import type React from 'next';
import PublicTemplate from '@components/templates/public.template';
import { component } from '@components/index';
import { DynamicForm } from '@forms/dynamic-form';

export default async function Page() {
  const res = await fetch(`http://localhost:3000/api/login-form`);
  const formSchema = (await res.json()) as component;

  return (
    <PublicTemplate>
      <DynamicForm formSchema={formSchema} />
    </PublicTemplate>
  );
}
