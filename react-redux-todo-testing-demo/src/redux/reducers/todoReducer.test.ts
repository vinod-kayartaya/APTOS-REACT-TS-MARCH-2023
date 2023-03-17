import { ADD_TODO, DELETE_TODO, FETCH_TODOS, TODO_COMPLETE } from "../types/actionTypes";
import { IState } from "../types/datatypes";
import todoReducer from "./todoReducer";


const initialState: IState = {
    todos: [
        { id: 1, todoText: 'get milk', finished: false }
    ]
};

describe('todoReducer', () => {

    it('should return default state', () => {
        const state = todoReducer(initialState, { type: 'UNKNOWN' });
        expect(state).toHaveProperty('todos');
        expect(state.todos).toHaveLength(1);
    });

    it('should add new todo task', () => {
        const state = todoReducer(initialState, { type: ADD_TODO, payload: 'get eggs' });
        expect(state.todos).toHaveLength(2);
        expect(state.todos[1]).toBeDefined();
        expect(state.todos[1].finished).toBeFalsy();
        expect(state.todos[1].id).toEqual(2);
    });

    it('should add a new task with no initial tasks', () => {
        const state = todoReducer({ todos: [] }, { type: ADD_TODO, payload: 'get eggs' });
        expect(state.todos).toHaveLength(1);
    });

    it('should delete a task', () => {
        const state = todoReducer(initialState, { type: DELETE_TODO, payload: 1 });
        expect(state.todos).toHaveLength(0);
    });

    it('should not delete task if id is invalid', () => {
        const state = todoReducer(initialState, { type: DELETE_TODO, payload: 100 });
        expect(state.todos).toHaveLength(1);
    });

    it('should toggle the state of a task', () => {
        const state = todoReducer(initialState, { type: TODO_COMPLETE, payload: 1 });
        expect(state.todos[0].finished).toBeTruthy();
    });

    it('should not toggle any task status for invalid id', () => {
        const state = todoReducer(initialState, { type: TODO_COMPLETE, payload: 100 });
        expect(state).toEqual(initialState);
    });

    it('should fetch all todos', () => {
        const state = todoReducer(initialState, { type: FETCH_TODOS });
        expect(state.todos).toHaveLength(1);
    });
});