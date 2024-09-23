'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { FormComponentData } from '@app/types';

export async function action({ submit, router, key }: FormComponentData, x: FormData) {
	let isSuccess = true;

	try {
		const response = await fetch(process.env.API_BASE_URL + submit.href, {
			method: submit.method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(Object.fromEntries(x))
		});

		const data = await response.json();

		if (!response.ok) {
			data['key'] = key;
			setErrorResponse(router.current, data);

			throw new Error('Failed to fetch data');
		}

		setAuthCookie(response);
	} catch (error) {
		console.log('Error:', error);

		console.error(error);
		isSuccess = false;
	} finally {
		redirect(isSuccess ? router.next : router.current);
	}
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

//setErrorResponse in cookies
const setErrorResponse = (key: string, error: any) => {
	console.error(error);
	cookies().set({
		name: `error[${key}]`,
		value: JSON.stringify(error),
		secure: true,
		httpOnly: true
	});
};
