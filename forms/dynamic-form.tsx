import { action } from 'actions/form.action';
import React from 'react';

import { FormComponent } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ key, submit, router, ...component }: Readonly<FormComponent & { key: any }>) {
	const actionWithSubmit = action.bind(null, { submit, router, key });
	return <GenerateForm {...component} key={key} router={router} submit={submit} action={actionWithSubmit} />;
}
