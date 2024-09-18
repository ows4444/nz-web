import type React from 'next';

import { H2 } from '@components/core/atoms';
import PublicTemplate from '@components/templates/public.template';

export default async function Page() {
	return (
		<PublicTemplate>
			<H2 content="Home" />
		</PublicTemplate>
	);
}
