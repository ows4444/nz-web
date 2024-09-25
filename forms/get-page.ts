import { PageComponent } from '@app/types';

export async function getPageStructure(url: string): Promise<PageComponent> {
	const response = await fetch(url, { cache: 'no-cache' });
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return response.json();
}
