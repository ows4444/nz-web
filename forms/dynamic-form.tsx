import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { component } from '@components/index';

import { GenerateComponents } from './generate-component';

interface DynamicFormProps {
	formSchema: component;
	router: { current: string; next: string };
	href: string;
	method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
}

export function DynamicForm({ formSchema, href, method, router }: Readonly<DynamicFormProps>) {
	async function action(formData?: FormData) {
		'use server';

		let isSuccessful = false;
		let error = '';
		try {
			const response = await fetch(href, {
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(Object.fromEntries(formData!))
			});
			await response.json();
			if (!response.ok) {
				throw new Error('Failed to submit form. Please try again.');
			}
			setAuthCookie(response);
			isSuccessful = true;
		} catch (e: any) {
			error = e.message;
		} finally {
			redirect(isSuccessful ? router.next : router.current + '?error=' + error);
		}
	}
	return <GenerateComponents action={action} {...formSchema} />;
}

const setAuthCookie = (response: Response) => {
	const setCookieHeader = response.headers.get('Set-Cookie');
	if (setCookieHeader) {
		const cookieValue = setCookieHeader.split(';')[0].split('=')[1];

		const secure = true;
		const httpOnly = true;

		cookies().set({
			name: 'connect.sid',
			value: cookieValue,
			secure: secure,
			httpOnly: httpOnly
			// expires: new Date(jwtDecode(token).exp! * 1000), // Uncomment if you need token expiration
		});
	}
};
