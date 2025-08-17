// import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { Task } from '@/types';

interface TaskItemProps {
	task: Task;
	onUpdate: (updatedTask: Task) => void;
}

function TaskItem ({ task, onUpdate }: TaskItemProps) {

	const propsBox = { task, onUpdate };

	return (
		<>
			<>TaskItem</>
			<>{propsBox}</>
		</>
	)
}

export default TaskItem
