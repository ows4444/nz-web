import type React from 'next';

import PublicTemplate from '@components/templates/public.template';
import { DynamicForm } from '@forms/dynamic-form';
import { getFormStructure } from '@forms/get-form';

export default async function Page() {
	const props = await getFormStructure(`http://localhost:3000/api/login-form`);

	return (
		<PublicTemplate>
			<DynamicForm {...props} />
		</PublicTemplate>
	);
}
