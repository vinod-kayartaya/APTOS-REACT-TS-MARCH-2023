import React from 'react';
import { Task } from '../App';
import Toolbar from './Toolbar';

type TodoEntryProps = {
    task: Task;
    toggleTodoStatus: (id: number) => void;
    deleteTask: (id: number) => void;
};

const TodoEntry: React.FC<TodoEntryProps> = ({
    task,
    toggleTodoStatus,
    deleteTask,
}) => {
    return (
        <>
            <div className='row todoEntry'>
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
                    <Toolbar task={task} deleteTask={deleteTask} />
                </div>
            </div>
        </>
    );
};

export default TodoEntry;
