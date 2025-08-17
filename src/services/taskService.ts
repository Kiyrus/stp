import type {Task} from '@/types/task.ts';

export const createTask = (title: string): Task => ({
	id: Date.now().toString(),
	title,
	completed: false,
	priority: 'medium',
	createdAt: new Date(),
});

export const calculateCompletion = (tasks: Task[]): number => {
	const completed = tasks.filter(t => t.completed).length;
	return Math.round((completed / tasks.length) * 100) || 0;
};
