import type React from 'next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nizaami | Login',
  description: 'Nizaami is a full-stack TypeScript framework for building web applications.',
};

export default function Layout(props: any) {
  return <div className={inter.className} {...props} />;
}
