import { action } from 'actions/form.action';
import React from 'react';

import { FormComponentData } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ key, submit, router, ...component }: Readonly<FormComponentData & { key: any }>) {
	const actionWithSubmit = action.bind(null, { submit, router });
	return (
		<GenerateForm key={key} router={router} name={'FORM'} submit={submit} action={actionWithSubmit} {...component} />
	);
}
