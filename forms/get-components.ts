import { ComponentResponse } from '@app/types';

export async function getComponentsStructure(url: string): Promise<ComponentResponse> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}
