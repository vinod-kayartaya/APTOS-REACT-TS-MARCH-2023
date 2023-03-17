import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const initialState = {
    todoReducerState: {
        todos: [
            { id: 5, todoText: 'Buy milk', finished: false },
            { id: 6, todoText: 'Buy eggs', finished: false },
        ],
    },
};
const mockStore = configureStore(); // a fuction to create a store
const store = mockStore(initialState);

describe('TodoList', () => {
    it('should render list of Todo components', () => {
        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
        expect(screen.getByText(/buy eggs/i)).toBeInTheDocument();
    });

    it('should render an empty TodoList component', () => {
        const store = mockStore({
            todoReducerState: {
                todos: [],
            },
        });

        render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        expect(screen.getByTestId('todoList')).toBeInTheDocument();
    });
});
