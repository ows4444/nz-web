import type React from 'react';

import { GeneratePage } from '@components/generate-page';
import { getPageStructure } from '@forms/get-page';

export default async function Page() {
	const page = await getPageStructure(`http://localhost:3000/api/page-builder`);
	return <GeneratePage {...page} />;
}
