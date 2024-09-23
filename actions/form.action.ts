'use server';

export async function action<T = any>(
	submit: {
		href: string;
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
	},
	x: T
) {
	try {
		const response = await fetch(submit.href, {
			method: submit.method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(x)
		});

		await response.json();

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
	} catch (error) {
		console.error('Error:', error);
	}
}
