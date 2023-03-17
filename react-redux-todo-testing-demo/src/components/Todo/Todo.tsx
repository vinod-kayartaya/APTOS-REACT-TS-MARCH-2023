import React from 'react';
import { useDispatch } from 'react-redux';
import {
    deleteTodo,
    toggleTodoComplete,
} from '../../redux/actionCreators/todoActionCreators';

interface ITodoProps {
    id?: number;
    todoText?: string;
    finished?: boolean;
}

const Todo: React.FC<ITodoProps> = ({ todoText, finished, id }) => {
    const dispatch = useDispatch();

    const toggleTodoState = (todoId: number) => {
        dispatch(toggleTodoComplete(todoId));
    };

    const removeTodo = (todoId: number) => {
        dispatch(deleteTodo(todoId));
    };

    return (
        <>
            <div className='row'>
                <div className='col-1'>
                    <button
                        data-testid='btnDeleteTodo'
                        onClick={() => removeTodo(id as number)}
                        className='btn btn-outline-danger'
                    >
                        &times;
                    </button>
                </div>
                <div className='col'>
                    <div
                        data-testid='divTodoText'
                        style={{
                            textDecoration: finished ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => toggleTodoState(id as number)}
                    >
                        {todoText}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
