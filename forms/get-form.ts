import { ComponentFormResponse } from '@app/types';

export async function getFormStructure(url: string): Promise<ComponentFormResponse> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}
