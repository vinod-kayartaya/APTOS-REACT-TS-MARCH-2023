import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    TODO_COMPLETE,
} from '../types/actionTypes';
import { IAction, IState } from '../types/datatypes';

const initialState: IState = {
    todos: [
        { id: 1, todoText: 'Create React App', finished: true },
        { id: 2, todoText: 'Add redux reducer', finished: true },
        { id: 3, todoText: 'Add redux action creators', finished: true },
        { id: 4, todoText: 'Create components', finished: true },
        { id: 5, todoText: 'Write tests', finished: false },
        { id: 6, todoText: 'Run tests', finished: false },
    ],
};

const todoReducer = (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case ADD_TODO: {
            const todos = [...state.todos];

            const newId =
                todos.length > 0
                    ? Math.max(...todos.map((td) => td.id)) + 1
                    : 1;
            todos.push({
                id: newId,
                todoText: action.payload,
                finished: false,
            });
            return { ...state, todos };
        }
        case DELETE_TODO: {
            const todos = [...state.todos];
            const index = todos.findIndex(
                (td) => td.id === action.payload
            );
            if (index !== -1) {
                todos.splice(index, 1);
            }
            return { ...state, todos };
        }
        case TODO_COMPLETE: {
            const todos = [...state.todos];
            const index = todos.findIndex(
                (td) => td.id === action.payload
            );
            if (index !== -1) {
                todos[index].finished = !todos[index].finished;
            }
            return { ...state, todos };
        }
        case FETCH_TODOS: {
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
};

export default todoReducer;
