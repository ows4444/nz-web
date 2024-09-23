'use server';

import { redirect } from 'next/navigation';

import { FormComponentData } from '@app/types';

export async function action<T = any>({ submit, router }: FormComponentData, x: T) {
	let isSuccess = true;

	console.log('>>>>>', process.env.API_BASE_URL + submit.href);

	try {
		const response = await fetch(process.env.API_BASE_URL + submit.href, {
			method: submit.method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(x)
		});

		if (!response.ok) throw new Error('Failed to fetch data');

		await response.json();
	} catch (error) {
		console.error(error);
		isSuccess = false;
	} finally {
		redirect(isSuccess ? router.next : router.current);
	}
}
