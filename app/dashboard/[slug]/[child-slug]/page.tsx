import type React from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { H2 } from '@components/core/atoms';

export default async function Page({ params }: Readonly<{ params: Params }>) {
	return <H2 content={`/${params.slug}/${params['child-slug']}`} />;
}
