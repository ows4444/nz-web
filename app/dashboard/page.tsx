import type React from 'next';

import { H2 } from '@components/core/atoms';
import DashboardTemplate from '@components/templates/dashboard.template';

export default async function Page() {
	return (
		<DashboardTemplate>
			<H2 content="Dashboard" />
		</DashboardTemplate>
	);
}
