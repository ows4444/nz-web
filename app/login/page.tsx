import type React from 'next';

import { GeneratePage } from '@components/generate-page';
import { getPageStructure } from '@forms/get-page';

export default async function Page() {
	const page = await getPageStructure(`http://localhost:3000/api/login-page`);

	return <GeneratePage {...page} />;
}
