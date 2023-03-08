import React from 'react';
import { Task } from '../App';
import Toolbar from './Toolbar';

type TodoEntryProps = {
    task: Task;
    toggleTodoStatus: (id: number) => void;
};

const TodoEntry: React.FC<TodoEntryProps> = ({ task, toggleTodoStatus }) => {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <span
                        onClick={() => toggleTodoStatus(task.id)}
                        className='lead'
                        style={{
                            cursor: 'pointer',
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {task.text}
                    </span>
                </div>
                <div className='col-4'>
                    <Toolbar />
                </div>
            </div>
        </>
    );
};

export default TodoEntry;
