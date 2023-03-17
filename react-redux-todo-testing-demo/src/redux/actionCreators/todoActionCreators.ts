import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    TODO_COMPLETE,
} from '../types/actionTypes';
import { IAction } from '../types/datatypes';

export const fetchTodos = (): IAction => {
    return { type: FETCH_TODOS };
};

export const addTodo = (todoText: string): IAction => {
    return { type: ADD_TODO, payload: todoText };
};

export const deleteTodo = (id: number): IAction => {
    return { type: DELETE_TODO, payload: id };
};

export const toggleTodoComplete = (id: number): IAction => {
    return { type: TODO_COMPLETE, payload: id };
};
