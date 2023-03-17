import Todo from './Todo';
import { fireEvent, render, screen } from '@testing-library/react';
import { DELETE_TODO, TODO_COMPLETE } from '../../redux/types/actionTypes';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockUseDispatch,
}));

describe('Todo component tests', () => {
    it('should render the Todo component', () => {
        render(<Todo todoText='Get milk' />);
        expect(screen.getByText(/get milk/i)).toBeInTheDocument();
    });

    it('should dispatch DELETE_TODO action when the times button is clicked', () => {
        render(<Todo id={1234} todoText='Get eggs' />);
        fireEvent.click(screen.getByTestId('btnDeleteTodo'));
        expect(mockUseDispatch).toHaveBeenCalledWith({
            type: DELETE_TODO,
            payload: 1234,
        });
    });

    it('should dispatch TODO_COMPLETE action when the todo text is clicked', () => {
        render(<Todo id={1234} todoText='Get eggs' />);
        fireEvent.click(screen.getByTestId('divTodoText'));
        expect(mockUseDispatch).toHaveBeenCalledWith({
            type: TODO_COMPLETE,
            payload: 1234,
        });
    });
});
