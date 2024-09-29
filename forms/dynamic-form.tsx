import { action } from 'actions/form.action';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormComponent } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ key, submit, router, ...component }: Readonly<FormComponent & { key: any }>) {
	const methods = useForm();
	const actionWithSubmit = action.bind(null, { submit, router, key });

	const onError = (errors: any) => {
		console.log('error', errors);
	};

	return (
		<FormProvider key={key} {...methods}>
			<GenerateForm
				{...component}
				ID={key}
				onSubmit={methods.handleSubmit((data) => actionWithSubmit(data), onError)}
			/>
		</FormProvider>
	);
}
