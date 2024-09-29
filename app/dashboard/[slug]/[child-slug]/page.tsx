import type React from 'next';

import { H2 } from '@components/core/atoms';

export default async function Page({ params }: Readonly<{ params: any }>) {
	return <H2 content={`/${params.slug}/${params['child-slug']}`} />;
}
