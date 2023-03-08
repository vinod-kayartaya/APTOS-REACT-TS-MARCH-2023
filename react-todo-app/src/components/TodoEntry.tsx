import React from 'react';
import { Task } from '../App';

type TodoEntryProps = {
    task: Task;
    toggleTodoStatus: (id: number) => void;
};

const TodoEntry: React.FC<TodoEntryProps> = ({ task, toggleTodoStatus }) => {
    return (
        <>
            <span
                onClick={() => toggleTodoStatus(task.id)}
                className='lead'
                style={{
                    cursor: 'pointer',
                    textDecoration: task.completed ? 'line-through' : 'none',
                }}
            >
                {task.text}
            </span>
        </>
    );
};

export default TodoEntry;
