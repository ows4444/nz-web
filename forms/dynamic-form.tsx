import { action } from 'actions/form.action';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormComponent } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ submit, router, ...component }: Readonly<FormComponent>) {
	const methods = useForm();
	const actionWithSubmit = action.bind(null, { submit, router });

	const onError = (errors: any) => {
		console.log('error', errors);
	};

	return (
		<FormProvider {...methods}>
			<GenerateForm {...component} onSubmit={methods.handleSubmit((data) => actionWithSubmit(data), onError)} />
		</FormProvider>
	);
}
