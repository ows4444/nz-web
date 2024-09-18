import type React from 'next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nizaami | Dashboard',
	description: 'Nizaami is a full-stack TypeScript framework for building web applications.'
};

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
