import React, { useState } from 'react';
import { Task } from '../App';
import Toolbar from './Toolbar';

type TodoEntryProps = {
    task: Task;
    toggleTodoStatus: (id: number) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, taskText: string) => void;
};

const TodoEntry: React.FC<TodoEntryProps> = ({
    task,
    toggleTodoStatus,
    deleteTask,
    updateTask,
}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [taskText, setTaskText] = useState(task.text);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        updateTask(task.id, taskText);
        setIsEditable(false);
    };

    const cancelEdit = () => {
        setIsEditable(false);
        setTaskText(task.text);
    };
    return (
        <>
            <div className='row todoEntry'>
                <div className='col'>
                    {isEditable ? (
                        <form onSubmit={submitHandler}>
                            <input
                                className='form-control'
                                value={taskText}
                                onChange={(e) => setTaskText(e.target.value)}
                            />
                        </form>
                    ) : (
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
                    )}
                </div>
                <div className='col-4'>
                    <Toolbar
                        task={task}
                        isEditable={isEditable}
                        cancelEdit={cancelEdit}
                        deleteTask={deleteTask}
                        setIsEditable={setIsEditable}
                    />
                </div>
            </div>
        </>
    );
};

export default TodoEntry;
