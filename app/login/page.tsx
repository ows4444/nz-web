import type React from 'next';

import { component } from '@components/index';
import PublicTemplate from '@components/templates/public.template';
import { DynamicForm } from '@forms/dynamic-form';

export default async function Page() {
	const res = await fetch(`http://localhost:3000/api/login-form`);
	const formSchema = (await res.json()) as component;

	return (
		<PublicTemplate>
			<DynamicForm
				formSchema={formSchema}
				router={{
					current: '/login',
					next: '/dashboard'
				}}
				href={'http://localhost:4000/api/auth/login'}
				method={'POST'}
			/>
		</PublicTemplate>
	);
}
