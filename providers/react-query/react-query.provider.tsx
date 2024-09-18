'use client';

import React, { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ReactQueryProvider({ children }: Readonly<{ children: ReactNode }>) {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })
	);
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
