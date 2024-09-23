'use server';

export async function action(
	submit: {
		href: string;
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
	},
	x: any
) {
	console.log('Form submitted', x);

	console.log('submit', submit);

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
}
