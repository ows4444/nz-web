import { action } from 'actions/form.action';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormComponent } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ key, submit, router, ...component }: Readonly<FormComponent & { key: any }>) {
	const methods = useForm();

	useEffect(() => {
		console.log('Form State', methods.formState.isValid);
	}, [methods.formState]);

	const onSubmit = (data: any) => {
		console.log('Message', data);
		action({ submit, router, key }, data);
	};

	const onError = (errors: any) => {
		console.log('error', errors);
	};

	return (
		<FormProvider key={key} {...methods}>
			<GenerateForm {...component} ID={key} onSubmit={methods.handleSubmit(onSubmit, onError)} />
		</FormProvider>
	);
}
