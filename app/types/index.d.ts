export type ChildComponent = {
	key: any;
	name: string;
	children?: ChildComponent[];
	props?: Record<string, any>;
};
export type component = {
	name: string;
	children?: ChildComponent[];
	action?: any;
	props?: Record<string, any>;
};

export type ComponentResponse = {
	component: component;
	router: {
		current: string;
		next: string;
	};
	submit: {
		href: string;
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
	};
};
