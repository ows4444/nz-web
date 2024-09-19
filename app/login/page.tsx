import type React from 'next';

import { GenerateComponents } from '@components/generate-component';
import { DynamicForm } from '@forms/dynamic-form';
import { getComponentsStructure } from '@forms/get-components';
import { getFormStructure } from '@forms/get-form';

export default async function Page() {
	const publicTemplateHeaderProps = await getComponentsStructure(`http://localhost:3000/api/templates/public-header`);
	const publicTemplateFooterProps = await getComponentsStructure(`http://localhost:3000/api/templates/public-footer`);
	const formProps = await getFormStructure(`http://localhost:3000/api/login-form`);

	return (
		<>
			<GenerateComponents {...publicTemplateHeaderProps} />
			<DynamicForm {...formProps} />
			<GenerateComponents {...publicTemplateFooterProps} />
		</>
	);
}
