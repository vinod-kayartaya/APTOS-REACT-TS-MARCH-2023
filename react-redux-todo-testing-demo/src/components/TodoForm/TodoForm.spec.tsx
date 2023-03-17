import { render, screen, fireEvent } from '@testing-library/react';
import { ADD_TODO } from '../../redux/types/actionTypes';
import TodoForm from './TodoForm';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

describe('TodoForm', () => {
    it('should dispatch ADD_TODO for a valid todoText', () => {
        render(<TodoForm />);
        const tf = screen.getByTestId('todoText');
        fireEvent.change(tf, { target: { value: 'Buy eggs' } });
        const form = screen.getByTestId('addTodoForm');
        fireEvent.submit(form);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: ADD_TODO,
            payload: 'Buy eggs',
        });
    });

    it('should not dispatch any action for an empty todoText', () => {
        render(<TodoForm />);
        const tf = screen.getByTestId('todoText');
        fireEvent.change(tf, { target: { value: '' } });
        const form = screen.getByTestId('addTodoForm');
        fireEvent.submit(form);
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
});
