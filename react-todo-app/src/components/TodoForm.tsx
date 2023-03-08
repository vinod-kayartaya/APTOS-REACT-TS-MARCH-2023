import React, { useState } from 'react';

type TodoFormProps = {
    addTask: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
    const [task, setTask] = useState<string>('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(task);
        setTask('');
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    placeholder='what would you like to do?'
                    autoFocus
                />
            </form>
        </>
    );
};

export default TodoForm;
