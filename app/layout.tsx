import type React from 'react';
import type { Metadata } from 'next';

import DragAndDropProvider from '@providers/drag-n-drop/dnd.provider';
import ReactQueryProvider from '@providers/react-query/react-query.provider';
import StoreProvider from '@providers/store/store.provider';
import StyledComponentProvider from '@providers/styled-component/styled-component.provider';

export const metadata: Metadata = {
	title: 'Nizaami | Home',
	description: 'Nizaami is a full-stack TypeScript framework for building web applications.'
};

export default function Layout(props: any) {
	return (
		<html lang="en">
			<body>
				<StoreProvider>
					<ReactQueryProvider>
						<StyledComponentProvider>
							<DragAndDropProvider>{props.children}</DragAndDropProvider>
						</StyledComponentProvider>
					</ReactQueryProvider>
				</StoreProvider>
			</body>
		</html>
	);
}
