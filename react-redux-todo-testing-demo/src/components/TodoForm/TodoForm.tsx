import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actionCreators/todoActionCreators';

interface ITodoFormProps {}

const TodoForm: React.FC<ITodoFormProps> = () => {
    const [todoText, setTodoText] = useState<string>('');
    const dispatch = useDispatch();

    const changeHandler = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setTodoText(value);
    };

    const submitHandler = (evt: FormEvent) => {
        evt.preventDefault();
        if (!todoText) return;
        dispatch(addTodo(todoText));
        setTodoText('');
    };
    return (
        <>
            <h3>Add a new todo:</h3>

            <form onSubmit={submitHandler} data-testid='addTodoForm'>
                <input
                    data-testid='todoText'
                    type='text'
                    value={todoText}
                    onChange={changeHandler}
                    className='form-control'
                    placeholder='enter what to do...'
                    autoFocus
                />
            </form>
        </>
    );
};

export default TodoForm;
