import { action } from 'actions/form.action';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormComponent } from '@app/types';
import { GenerateForm } from '@components/generate-form';

export function DynamicForm({ key, submit, router, ...component }: Readonly<FormComponent & { key: any }>) {
	const { register, watch, handleSubmit } = useForm({});

	const processForm = (data: any) => {
		console.log(data);
		action({ submit, router, key }, data);
	};

	return (
		<GenerateForm
			{...component}
			ID={key}
			key={key}
			register={register}
			watch={watch}
			onSubmit={handleSubmit(processForm)}
		/>
	);
}
