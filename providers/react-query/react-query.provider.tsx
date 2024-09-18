'use client';

import React, { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryDevtoolsProduction = React.lazy(() =>
	import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
		default: d.ReactQueryDevtools
	}))
);

export default function ReactQueryProvider({ children }: Readonly<{ children: ReactNode }>) {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })
	);

	const [showDevtools, setShowDevtools] = React.useState(false);

	React.useEffect(() => {
		// @ts-expect-error
		window.toggleDevtools = () => setShowDevtools((old) => !old);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen />
			{showDevtools && (
				<React.Suspense fallback={null}>
					<ReactQueryDevtoolsProduction />
				</React.Suspense>
			)}
		</QueryClientProvider>
	);
}
