export interface Task {
	id: string;
	title: string;
	completed: boolean;
	priority: 'low' | 'medium' | 'high';
	createdAt: Date;
	deadline?: Date;
}

export type TaskAction =
		| { type: 'ADD_TASK'; payload: Task }
		| { type: 'DELETE_TASK'; payload: string }
		| { type: 'TOGGLE_TASK'; payload: string };
