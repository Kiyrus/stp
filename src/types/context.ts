import type { Task, TaskAction } from './task';

export interface TasksContextType {
	tasks: Task[];
	dispatch: React.Dispatch<TaskAction>;
}

export interface ThemeContextType {
	darkMode: boolean;
	toggleTheme: () => void;
}
